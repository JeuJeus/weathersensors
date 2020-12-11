const cron = require('node-cron');
const alert = require('./inactivityEmailAlert');
const env = require('./env');
const log = require('./logger');

cron.schedule(env.INACTIVITY_CRON_SCHEDULE, () => {
  log.logWrite('INFO', 'STARTING INACTIVITY CHECK CRON JOB!');
  alert.checkAndAlertInactiveSensors();
});
