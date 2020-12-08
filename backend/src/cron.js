const cron = require('node-cron');
const alert = require('./inactivityEmailAlert');

cron.schedule('0, *, *, *, *', () => {
});


