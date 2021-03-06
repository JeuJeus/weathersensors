const PORT = '3000';
const DATABASE_PATH = './db/data.db';

const INACTIVITY_CRON_SCHEDULE = (process.env.INACTIVITY_CRON_SCHEDULE) ? process.env.INACTIVITY_CRON_SCHEDULE : '0 * * * *';
const INACTIVITY_THRESHOLD_MILLIS = (process.env.INACTIVITY_THRESHOLD_MILLIS) ? process.env.INACTIVITY_THRESHOLD_MILLIS : 20 * 60 * 1000;

const ADMIN_MAIL_ADDRESS = process.env.ADMIN_MAIL_ADDRESS;
const FRONTEND_LIVE_DOMAIN = process.env.FRONTEND_LIVE_DOMAIN;

const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

const NODEMCU_API_TOKEN = (process.env.NODEMCU_API_TOKEN) ? process.env.NODEMCU_API_TOKEN : '$NODEMCU_API_TOKEN';

const LOG_LOCATION = (process.env.LOG_LOCATION) ? process.env.LOG_LOCATION : 'log/backend.log';
const LOG_SIZE = (process.env.LOG_SIZE) ? process.env.LOG_SIZE : '10M';
const LOG_INTERVAL = (process.env.LOG_INTERVAL) ? process.env.LOG_INTERVAL : '1d';
const LOG_COMPRESSION = (process.env.LOG_COMPRESSION) ? process.env.LOG_COMPRESSION : 'gzip';
const LOG_LOCALE = (process.env.LOG_LOCALE) ? process.env.LOG_LOCALE : 'de-DE';
const LOG_AMPM = (process.env.LOG_AMPM) ? process.env.LOG_AMPM : false;

module.exports = {
  FRONTEND_LIVE_DOMAIN,
  PORT,
  INACTIVITY_CRON_SCHEDULE,
  INACTIVITY_THRESHOLD_MILLIS,
  DATABASE_PATH,
  ADMIN_MAIL_ADDRESS,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASSWORD,
  NODEMCU_API_TOKEN,
  LOG_LOCATION,
  LOG_SIZE,
  LOG_INTERVAL,
  LOG_COMPRESSION,
  LOG_LOCALE,
  LOG_AMPM,
};
