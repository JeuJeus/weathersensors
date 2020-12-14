const mailSender = require('./mailSender');
const dbConnection = require('./databaseConnection');
const env = require('./env');
const log = require('./logger');
const helper = require('./helper');

let mailOptions = {
  from: `"Weathersensors" <${env.ADMIN_MAIL_ADDRESS}>`,
  to: `${env.ADMIN_MAIL_ADDRESS}`,
  subject: `sensor failure! on "${env.FRONTEND_LIVE_DOMAIN}"`,
  text: 'sensor failure!',
};
const db = dbConnection.openDb();
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);


function updateNotificationStatus(db, sensor) {
  sensor.INACTIVITY_NOTIFICATION_SENT = 1;
  dbConnection.updateInactivityNotificationSent(db, sensor);
  log.logWrite('INFO', `INACTIVITY NOTIFICATION FOR SENSOR [${sensor.ID}] WAS PERSISTED.`);
}

async function sendAlert(db, sensor) {
  //TODO INTRODUCE POSSIBILITY TO SEND MAILS TO OTHER RECIPANTS
  const mail = Object.assign({}, mailOptions);
  mail.text = `sensor ${sensor.ID} failed to send data, last update was "${sensor.LAST_UPDATE}"`;//TODO -> CONVERT TIMESTAMP
  if (await mailSender.sendMail(mail)) updateNotificationStatus(db, sensor);
}

function inactivityMailPreconditions(sensor) {
  return helper.checkIfSensorInactive(sensor.LAST_UPDATE) && !(helper.checkIfAlertAlreadySent(sensor));
}

async function checkAndAlertInactiveSensors() {
  let sensors = await dbConnection.getSensors(db);
  sensors.forEach(sensor => {
    if (inactivityMailPreconditions(sensor)) sendAlert(db, sensor);
  });
}

function cleanup() {
  log.logWrite('INFO', 'BACKEND EMAIL ALERT SHUTTING DOWN');
  dbConnection.closeDb(db);
  process.exit(1);
}

module.exports = {
  inactivityMailPreconditions,
  sendAlert,
  checkAndAlertInactiveSensors,
  updateNotificationStatus,
};
