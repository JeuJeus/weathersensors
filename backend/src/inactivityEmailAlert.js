const mailSender = require('./mailSender');
const env = require('./env');

let mailOptions = {
  from: `"Weathersensors" <${env.ADMIN_MAIL_ADDRESS}>`,
  to: `${env.ADMIN_MAIL_ADDRESS}`,
  subject: `Sensor failure! on "${env.FRONTEND_LIVE_DOMAIN}"`,
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
};
function checkIfSensorInactive(timestamp) {
  const timeSecondsNow = Date.now();
  return (timeSecondsNow - timestamp) > env.INACTIVITY_THRESHOLD_MILLIS;
}

function checkIfAlertAlreadySent(sensor) {
  return sensor.INACTIVITY_NOTIFICATION_SENT === 1;
}

function sendAlert(sensor) {

}

module.exports = {
  checkIfSensorInactive,
};
