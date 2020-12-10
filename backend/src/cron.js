const cron = require('node-cron');
const alert = require('./inactivityEmailAlert');
const env = require('./env');

cron.schedule(env.INACTIVITY_CRON_SCHEDULE, () => {
  alert.checkAndAlertInactiveSensors();
});
