const dbConnection = require('./databaseConnection');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const atob = require('atob');

const httpServer = http.createServer(app);
const db = dbConnection.openDb();
const logger = function(req, res, next) {
  console.log(`${new Date().toISOString()} - Got Request [${req.connection.remoteAddress}]`);
  next(); // Passing the request to the next handler in the stack.
};

app.use(bodyParser.json({
  inflate: true,
  limit: '100kb',
  type: 'application/json',
}));
app.use(logger);


httpServer.listen(3000, (err) => {
  if (err) {
    console.log(`${new Date().toISOString()} - ERROR [${err}]`);
  }
  console.log(`${new Date().toISOString()} - APPLICATION STARTED`);
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
});

function validIdForRequest(req) {
  return req.params.SENSOR_ID && !isNaN(parseInt(req.params.SENSOR_ID));
}

app.get('/weatherData', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  const response = {
    'sensors': [],
    'sensorData': [],
  };
  const sensors = await dbConnection.getSensors(db);
  const sensorData = await dbConnection.getSensorData(db);
  response.sensors = sensors;
  response.sensorData = sensorData;
  res.send(response);
});
app.get('/sensorData/id/:SENSOR_ID', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  const response = {
    'sensorData': [],
  };
  if (validIdForRequest(req)) {
    response.sensorData = await dbConnection.getSensorDataById(db, req.params.SENSOR_ID);
    res.status(200).send(response);
  } else {
    res.status(400).send();
  }
});
app.get('/sensors', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  const response = {
    'sensors': [],
  };
  response.sensors = await dbConnection.getSensors(db);
  res.send(response);
});
app.get('/sensor/id/:SENSOR_ID', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  const response = {
    'sensor': [],
  };
  if (validIdForRequest(req)) {
    response.sensor = (await dbConnection.getSensorById(db, req.params.SENSOR_ID))[0];
    res.status(200).send(response);
  } else {
    res.status(400).send();
  }
});


app.post('/weatherData', function(req, res) {
  if (req.body) {
    req.body.TIMESTAMP = Date.now();
    // TODO NO VALIDATION AT ALL? XD
    dbConnection.insertWeatherData(db, req.body);
  } else {
    console.log(`${new Date().toISOString()} - POST REQUEST PARSIND BODY FAILED FROM [${req.connection.remoteAddress}]`);
  }
  res.send(`${atob('QWxsZSB2b24gdW5zIGVtcGZhbmdlbmVuIFdldHRlcmRhdGVuIHdlcmRlbiBuYWNoIC9kZXYvbnVsbCBnZXBpcGVkLiBBbGxlcyB3YXMgc2llIGltIEZyb250ZW5kIHNlaGVuIGlzdCBmYWtlIHVuZCB3aXJkIGdlbmVyaWVydCwgZGFzIHdhciB3ZW5pZ2VyIEF1ZndhbmQu')}`);
});


function cleanup() {
  console.log(`${new Date().toISOString()} - SHUTTING DOWN`);
  dbConnection.closeDb(db);
  process.exit(1);
}
