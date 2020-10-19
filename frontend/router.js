const bodyParser = require('body-parser');
const http = require('http');
const express = require('express');
const app = require('express')();
const basicAuth = require('express-basic-auth');
const path = require('path');

const httpServer = http.createServer(app);
const logger = function (req, res, next) {
  console.log(`${new Date().toISOString()} - GOT REQUEST TO [${req.originalUrl}] FROM [${req.ip}]`);
  next(); // Passing the request to the next handler in the stack.
};

app.use(bodyParser.json({
  inflate: true,
  limit: '100kb',
  type: 'application/json',
}));
app.use('/resources', express.static(path.join(__dirname, 'resources')));
app.use(logger);

httpServer.listen(3344, (err) => {
  if (err) {
    console.log(`${new Date().toISOString()} - ERROR [${err}]`);
  }
  console.log(`${new Date().toISOString()} - FRONTEND STARTED`);
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
  console.log(`${new Date().toISOString()} - FRONTEND SHUTTING DOWN`);
  process.exit(1);
}
