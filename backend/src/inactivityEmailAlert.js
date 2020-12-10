const mailSender = require('./mailSender');
const dbConnection = require('./databaseConnection');
const env = require('./env');

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

const db = dbConnection.openDb();

let mailOptions = {
  from: `"Weathersensors" <${env.ADMIN_MAIL_ADDRESS}>`,
  to: `${env.ADMIN_MAIL_ADDRESS}`,
  subject: `sensor failure! on "${env.FRONTEND_LIVE_DOMAIN}"`,
  text: 'sensor failure!',
};

function checkIfSensorInactive(sensor) {
  const timeSecondsNow = Date.now();
  return (timeSecondsNow - (sensor.LAST_UPDATE * 1000)) > env.INACTIVITY_THRESHOLD_MILLIS;
}

function checkIfAlertAlreadySent(sensor) {
  return sensor.INACTIVITY_NOTIFICATION_SENT === 1;
}

function updateNotificationStatus(sensor) {
  sensor.INACTIVITY_NOTIFICATION_SENT = 1;
  dbConnection.updateInactivityNotificationSent(db, sensor);
}

function sendAlert(sensor) {
  const mail = Object.assign({}, mailOptions);
  mail.text = `sensor ${sensor.ID} failed to send data, last update was "${sensor.LAST_UPDATE}"`;
  if (mailSender.sendMail(mail)) updateNotificationStatus(sensor);
}

function inactivityMailPreconditions(sensor) {
  return checkIfSensorInactive(sensor) && !(checkIfAlertAlreadySent(sensor));
}

async function checkAndAlertInactiveSensors() {
  let sensors = await dbConnection.getSensors(db);
  for (let sensor in sensors) {
    if (inactivityMailPreconditions(sensor)) sendAlert(sensor);
  }
}

function cleanup() {
  dbConnection.closeDb(db);
  process.exit(1);
}

module.exports = {
  inactivityMailPreconditions,
  sendAlert,
  checkAndAlertInactiveSensors,
  updateNotificationStatus,
};
