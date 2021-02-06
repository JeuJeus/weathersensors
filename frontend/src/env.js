const SERVER_URI = process.env.SERVER_URI || 'https||//awe2-api.jeujeus.de';

const UPDATE_INTERVAL_MILLIS = process.env.UPDATE_INTERVAL || 1000 * 60;
const NODEMCU_SEND_INTERVAL = process.env.NODEMCU_SEND_INTERVAL || 5;
const LIN_REGRESSION_DATAPOINT_AMOUNT = process.env.LIN_REGRESSION_DATAPOINT_AMOUNT || 10;

const TIMEZONE = process.env.TIMEZONE || 'Europe/Berlin';
const LOCALE = process.env.LOCALE || 'de-DE';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';

const LOG_LOCATION = process.env.LOG_LOCATION || 'log/backend.log';
const LOG_SIZE = process.env.LOG_SIZE || '10M';
const LOG_INTERVAL = process.env.LOG_INTERVAL || '1d';
const LOG_COMPRESSION = process.env.LOG_COMPRESSION || 'gzip';
const LOG_LOCALE = process.env.LOG_LOCALE || 'de-DE';
const LOG_AMPM = process.env.LOG_AMPM || false;

module.exports = {
  SERVER_URI,
  UPDATE_INTERVAL_MILLIS,
  NODEMCU_SEND_INTERVAL,
  LIN_REGRESSION_DATAPOINT_AMOUNT,
  TIMEZONE,
  LOCALE,
  ADMIN_PASSWORD,
  LOG_LOCATION,
  LOG_SIZE,
  LOG_INTERVAL,
  LOG_COMPRESSION,
  LOG_LOCALE,
  LOG_AMPM,
};
