const bodyParser = require('body-parser');
const http = require('http');
const express = require('express');
const app = require('express')();
const basicAuth = require('express-basic-auth');
const path = require('path');
const rfs = require('rotating-file-stream');
const favicon = require('serve-favicon');
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

const httpServer = http.createServer(app);
const logger = function(req, res, next) {
  logWrite('INFO', `GOT REQUEST TO [${req.originalUrl}] FROM [${req.ip}]`);
  next();
};

app.use(bodyParser.json({
  inflate: true,
  limit: '100kb',
  type: 'application/json',
}));
app.use('/resources', express.static(path.join(__dirname, 'resources')));
app.use(logger);
app.use(favicon(path.join(__dirname, 'resources', 'favicon.ico')));

httpServer.listen(3344, (err) => {
  if (err) {
    logWrite('ERROR', `[${err}]`);
  }
  logWrite('INFO', 'FRONTEND STARTED');
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
});

// ############### GET ROOT ###############
app.get('/', async function (req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

// ############### BASIC AUTH SECURED ###############
const auth = basicAuth({
  users: {admin: env.ADMIN_PASSWORD},
  challenge: true,
});

app.get('/admin', auth, function (req, res) {
  res.sendFile(path.join(__dirname + '/static/admin.html'));
});

function cleanup() {
  logWrite('INFO', 'FRONTEND SHUTTING DOWN');
  process.exit(1);
}
