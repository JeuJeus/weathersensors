const {check} = require('express-validator');
const dbConnection = require('./databaseConnection');

function validateSensorDataInBody() {
  return [
    check('MACADDRESS').isMACAddress(),
    //1604248996 = 11/01/2020 @ 17:43 (CEST)
    check('TIMESTAMP').isInt({min: 1604248996}),
    check('TEMPERATURE').isFloat({min: -100, max: 100}),
    check('AIRPRESSURE').isFloat({min: 0}),
    check('HUMIDITY').isFloat({min: 0, max: 100}),
  ];
}

function validateSensorLocation() {
  return [
    check('API_TOKEN').equals('aGllckv2bm50ZUlocmVXZXJidW5nU3RlaGVu'),
    check('ID').isInt(),
    check('LOCATION').isString(),
  ];
}

async function insertWeatherData(db, weatherData) {
  //this is needed in order to convert from seconds to milliseconds
  weatherData.TIMESTAMP = weatherData.TIMESTAMP * 1000;
  const result = await dbConnection.assignSensorIDByMACIfNotExists(db, weatherData.MACADDRESS);
  weatherData.ID = result.ID;
  const dbresult = await dbConnection.getWeatherDataByIdAndTimestamp(db, weatherData.ID, weatherData.TIMESTAMP);
  if (dbresult === undefined) {
    return await dbConnection.insertWeatherData(db, weatherData);
  } else {
    return new Error('Duplicate value: ' + weatherData.ID + ' & ' + weatherData.TIMESTAMP + ' already exist in DB');
  }
}

module.exports = {
  validateSensorDataInBody,
  validateSensorLocation,
  insertWeatherData,
};
