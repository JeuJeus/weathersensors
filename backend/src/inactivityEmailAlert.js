const mailSender = require('./mailSender');

const INACTIVITY_TIME_TRESHOLD_SECONDS = 20 * 60 * 1000;
const DEFAULT_MAIL_ADRESS = 'weathersensors@jeujeus.de';

let mailOptions = {
  from: `"Weathersensors" <${DEFAULT_MAIL_ADRESS}>`,
  to: `${DEFAULT_MAIL_ADRESS}`,
  subject: 'Sensor failure! on "weathersensors.jeujeus.de"',
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
};
function checkIfSensorInactive(timestamp) {
  const timeSecondsNow = Date.now();
  return (timeSecondsNow - timestamp) > INACTIVITY_TIME_TRESHOLD_SECONDS;
}

function checkIfAlertAlreadySent(sensor) {
  return sensor.INACTIVITY_NOTIFICATION_SENT === 1;
}

function sendAlert(sensor) {

}

module.exports = {
  checkIfSensorInactive,
};
