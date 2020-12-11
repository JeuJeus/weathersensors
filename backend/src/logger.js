const rfs = require('rotating-file-stream');
const env = require('./env');


const stream = rfs.createStream(env.LOG_LOCATION, {
  size: env.LOG_SIZE,
  interval: env.LOG_INTERVAL,
  compress: env.LOG_COMPRESSION,
  teeToStdout: true,
});

function logWrite(importance, message) {
  const as24hours = {hour12: env.LOG_AMPM};
  const now = `${new Date().toLocaleString(env.LOG_LOCALE, as24hours)}`;
  stream.write(`${now} - ${importance} : ${message}\n`);
}

module.exports = {
  logWrite,
};
