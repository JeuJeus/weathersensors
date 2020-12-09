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

function sendAlert(sensor) {
  if (checkIfSensorInactive(sensor) && !(checkIfAlertAlreadySent(sensor))) {
    const mail = Object.assign({}, mailOptions);
    mail.text = `sensor ${sensor.ID} failed to send data, last update was "${sensor.LAST_UPDATE}"`;
    if (mailSender.sendMail(mail)) dbConnection.updateInactivityNotificationSent(db, sensor);
  }
}

function cleanup() {
  dbConnection.closeDb(db);
  process.exit(1);
}

module.exports = {
  checkIfSensorInactive,
};
