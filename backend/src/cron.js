const cron = require('node-cron');
const alert = require('./inactivityEmailAlert');
const env = require('./env');
const log = require('./logger');

let validationResult = cron.validate(env.INACTIVITY_CRON_SCHEDULE);
let success = validationResult ? 'INFO' : 'ERROR';
let validity = validationResult ? 'VALID' : 'INVALID';
let state = validationResult ? 'ENABLED' : 'DISABLED';
log.logWrite(success, `CRONJOB FOR INACTIVITY VALIDATION WAS [${validity}], JOB IS [${state}]`);

if (validationResult) {
  cron.schedule(env.INACTIVITY_CRON_SCHEDULE, () => {
    log.logWrite('INFO', 'STARTING INACTIVITY CHECK CRON JOB!');
    alert.checkAndAlertInactiveSensors();
  });
}
