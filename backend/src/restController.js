const dbConnection = require('./databaseConnection');
const dataValidator = require('./dataValidator');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const helper = require('./helper');
const app = require('express')();
const basicAuth = require('express-basic-auth');
const atob = require('atob');
const {check, validationResult} = require('express-validator');
const rfs = require('rotating-file-stream');
const cors = require('cors');
const stream = rfs.createStream('log/backend.log', {
  size: '10M',
  interval: '1d',
  compress: 'gzip',
  teeToStdout: true,
});

const httpServer = http.createServer(app);
const db = dbConnection.openDb();

const logger = function(req, res, next) {
  stream.write(`${new Date().toISOString()} - GOT REQUEST TO [${req.originalUrl}] FROM [${req.ip}]\n`);
  next(); // Passing the request to the next handler in the stack.
};
app.use(logger);

app.use(bodyParser.json({
  inflate: true,
  limit: '100kb',
  type: 'application/json',
}));
// TODO SET ME ACCORDING TO DEPLOYMENT PLANS
app.use(cors({origin: '*'}));

httpServer.listen(3000, (err) => {
  if (err) {
    stream.write(`${new Date().toISOString()} - ERROR [${err}]\n`);
  }
  stream.write(`${new Date().toISOString()} - BACKEND STARTED\n`);
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
});

function validIdForRequest(req) {
  return req.params.SENSOR_ID && !isNaN(parseInt(req.params.SENSOR_ID));
}

// ############### GET REQUESTS ###############
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
    if (req.query.granularity) {
      response.sensorData = helper.reduceElementsToMaxSize(response.sensorData, req.query.granularity);
    }
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

// ############### POST REQUESTS ###############
// TODO EXTRACT THESE TWO TO SERVICE CLASS
function validateSensorDataInBody() {
  return [
    check('MACADDRESS').isMACAddress(),
    check('TIMESTAMP').isAlphanumeric(),
    check('TEMPERATURE').isFloat(),
    check('AIRPRESSURE').isFloat(),
    check('HUMIDITY').isFloat(),
  ];
}

function validateSensorLocation() {
  return [
    check('API_TOKEN').equals('aGllckv2bm50ZUlocmVXZXJidW5nU3RlaGVu'),
    check('ID').isInt(),
    check('LOCATION').isString(),
  ];
}

function errorParsingPostBody(req, res, errors) {
  stream.write(`${new Date().toISOString()} - POST REQUEST PARSING BODY FAILED FROM [${req.connection.remoteAddress}]\n`);
  return res.status(400).json({errors: errors.array()});
}

app.post('/weatherData', validateSensorDataInBody(), function(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    dataValidator.insertWeatherData(req.body);
  } else {
    return errorParsingPostBody(req, res, errors);
  }
  res.send(`${atob('QWxsZSB2b24gdW5zIGVtcGZhbmdlbmVuIFdldHRlcmRhdGVuIHdlcmRlbiBuYWNoIC9kZXYvbnVsbCBnZXBpcGVkLiBBbGxlcyB3YXMgc2llIGltIEZyb250ZW5kIHNlaGVuIGlzdCBmYWtlIHVuZCB3aXJkIGdlbmVyaWVydCwgZGFzIHdhciB3ZW5pZ2VyIEF1ZndhbmQu')}`);
});

app.post('/updateSensorLocation', validateSensorLocation(), function(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    dbConnection.updateSensorLocation(db, req.body);
    stream.write(`${new Date().toISOString()} - SENSOR [${req.body.ID}] WAS UPDATED BY [${req.connection.remoteAddress}]\n`);
  } else {
    return errorParsingPostBody(req, res, errors);
  }
  res.send('success');
});


function cleanup() {
  stream.write(`${new Date().toISOString()} - BACKEND SHUTTING DOWN\n`);
  dbConnection.closeDb(db);
  process.exit(1);
}
