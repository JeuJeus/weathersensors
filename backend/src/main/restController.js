const dbConnection = require('./databaseConnection');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const helper = require('./helper');
const app = express();

let httpServer = http.createServer(app);
let db = dbConnection.openDb();
let logger = function(req, res, next) {
  console.log('GOT REQUEST !');
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
    console.log(err);
  }
  console.log('Started on PORT 3000');
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
});

app.get('/weatherData', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  let response = {
    'sensors': [],
    'sensorData': [],
  };
  let sensors = await dbConnection.getSensors(db);
  let sensorData = await dbConnection.getSensorData(db);
  response.sensors = sensors;
  response.sensorData = sensorData;
  response.sensorData = helper.reduceElementsToMaxSize(response.sensorData, helper.INITIAL_MAX_SENSOR_DATA_ELEMENTS);
  res.send(response);
});
app.get('/sensorAndData/id/:SENSOR_ID', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  let response = {
    'sensor': [],
    'sensorData': [],
  };
  if (req.params.SENSOR_ID && !isNaN(parseInt(req.params.SENSOR_ID))) {
    response.sensor = await dbConnection.getSensorById(db, req.params.SENSOR_ID);
    response.sensorData = await dbConnection.getSensorDataById(db, req.params.SENSOR_ID);
    res.status(200).send(response);
  } else {
    res.status(400).send();
  }
});
app.get('/sensors', async function(req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
  let response = {
    'sensors': [],
  };
  response.sensors = await dbConnection.getSensors(db);
  res.send(response);
});


app.post('/weatherData', function(req, res) {
  if (req.body) {
    req.body.TIMESTAMP = Date.now();
    dbConnection.insertWeatherData(db, req.body);
  } else {
    console.log('parsing body failed');
  }
  res.send('dirty boy dont use penis.js');
});


function cleanup() {
  console.log('shutting down -- ' + Date.now());
  dbConnection.closeDb(db);
  process.exit(1);
}

