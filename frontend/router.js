const bodyParser = require('body-parser');
const http = require('http');
const express = require('express');
const app = require('express')();
const basicAuth = require('express-basic-auth');
const path = require('path');
const rfs = require('rotating-file-stream');

const stream = rfs.createStream('log/frontend.log', {
  size: '10M',
  interval: '1d',
  compress: 'gzip',
  teeToStdout: true,
});

const httpServer = http.createServer(app);
const logger = function(req, res, next) {
  stream.write(`${new Date().toISOString()} - GOT REQUEST TO [${req.originalUrl}] FROM [${req.ip}]\n`);
  next(); // Passing the request to the next handler in the stack.
};

app.use(bodyParser.json({
  inflate: true,
  limit: '100kb',
  type: 'application/json',
}));
app.use(logger);
app.use('/resources', express.static(path.join(__dirname, 'resources')));

httpServer.listen(3344, (err) => {
  if (err) {
    stream.write(`${new Date().toISOString()} - ERROR [${err}]\n`);
  }
  stream.write(`${new Date().toISOString()} - FRONTEND STARTED\n`);
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
});

// ############### GET ROOT ###############
app.get('/', async function (req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  res.sendFile(path.join(__dirname + '/index.html'));
});

// ############### BASIC AUTH SECURED ###############
const auth = basicAuth({
  users: {admin: '$PASSWORD'},
  challenge: true,
});

app.get('/admin', auth, function (req, res) {
  res.sendFile(path.join(__dirname + '/admin.html'));
});

function cleanup() {
  stream.write(`${new Date().toISOString()} - FRONTEND SHUTTING DOWN\n`);
  process.exit(1);
}
