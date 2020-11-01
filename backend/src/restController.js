const dbConnection = require('./databaseConnection');
const persistanceService = require('./persistanceService');
const bodyParser = require('body-parser');
const http = require('http');
const helper = require('./helper');
const app = require('express')();
const atob = require('atob');
const {validationResult} = require('express-validator');
const rfs = require('rotating-file-stream');
const cors = require('cors');

const stream = rfs.createStream('log/backend.log', {
  size: '10M',
  interval: '1d',
  compress: 'gzip',
  teeToStdout: true,
});
function logWrite(importance, message) {
  const as24hours = {hour12: false};
  const now = `${new Date().toLocaleString('de-DE', as24hours)}`;
  stream.write(`${now} - ${importance} : ${message}\n`);
}

const httpServer = http.createServer(app);
const db = dbConnection.openDb();

const logger = function(req, res, next) {
  logWrite('INFO', `GOT REQUEST TO [${req.originalUrl}] FROM [${req.ip}]`);
  next(); // Passing the request to the next handler in the stack.
};
app.use(logger);

app.use(bodyParser.json({
  inflate: true,
  limit: '100kb',
  type: 'application/json',
}));

app.use(cors({origin: '*'}));

httpServer.listen(3000, (err) => {
  if (err) {
    logWrite('ERROR', `[${err}]`);
  }
  logWrite('INFO', 'BACKEND STARTED');
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
    if (req.query.timerange_start || req.query.timerange_end) {
      response.sensorData = helper.filterTimeRangeByPresentParameters(response.sensorData, req.query);
    }
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
  if (validIdForRequest(req)) {
    const response = {};
    response.sensor = (await dbConnection.getSensorById(db, req.params.SENSOR_ID));
    res.status(200).send(response);
  } else {
    res.status(400).send();
  }
});

// ############### POST REQUESTS ###############

function errorParsingPostBody(req, res, errors) {
  logWrite('ERROR', `POST REQUEST PARSING BODY FAILED FROM [${req.connection.remoteAddress}], REQUEST BODY: ${JSON.stringify(req.body)}`);
  return res.status(400).json({errors: errors.array()});
}

function errorDuplicateValue(req, res, error) {
  logWrite('ERROR', `POST REQUEST ATTEMPTED TO INSERT DUPLICATE VALUE FROM [${req.connection.remoteAddress}], REQUEST BODY: ${JSON.stringify(req.body)}`);
  return res.status(400).json({errors: error.message});
}

app.post('/weatherData', persistanceService.validateSensorDataInBody(), async function(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const dbErrors = await persistanceService.insertWeatherData(db, req.body);
    if (dbErrors !== undefined) {
      return errorDuplicateValue(req, res, dbErrors);
    }
  } else {
    return errorParsingPostBody(req, res, errors);
  }
  res.send(`${atob('QWxsZSB2b24gdW5zIGVtcGZhbmdlbmVuIFdldHRlcmRhdGVuIHdlcmRlbiBuYWNoIC9kZXYvbnVsbCBnZXBpcGVkLiBBbGxlcyB3YXMgc2llIGltIEZyb250ZW5kIHNlaGVuIGlzdCBmYWtlIHVuZCB3aXJkIGdlbmVyaWVydCwgZGFzIHdhciB3ZW5pZ2VyIEF1ZndhbmQu')}`);
});

app.post('/updateSensorLocation', persistanceService.validateSensorLocation(), function(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    dbConnection.updateSensorLocation(db, req.body);
    logWrite('INFO', `LOCATION OF SENSOR [${req.body.ID}] WAS UPDATED BY [${req.connection.remoteAddress}]`);
  } else {
    return errorParsingPostBody(req, res, errors);
  }
  res.send('success');
});


function cleanup() {
  logWrite('INFO', 'BACKEND SHUTTING DOWN');
  dbConnection.closeDb(db);
  process.exit(1);
}
