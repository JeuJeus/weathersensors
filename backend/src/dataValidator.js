const {check} = require('express-validator');
const dbConnection = require('./databaseConnection');

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

async function getIdFromMacaddress(db, MACADDRESS) {
  await dbConnection.assignSensorIDByMACIfNotExists(db, MACADDRESS);
  return dbConnection.getSensorIDByMAC(db, MACADDRESS);
}

async function insertWeatherData(db, weatherData) {
  const result = await getIdFromMacaddress(db, weatherData.MACADDRESS);
  weatherData.ID = result.ID;
  const dbresult = await assureUniqueWeatherData(db, weatherData);
  if (dbresult === undefined) {
    return await dbConnection.insertWeatherData(db, weatherData);
  } else return new Error('Duplicate value: ' + weatherData.ID + ' & ' + weatherData.TIMESTAMP + ' already exist in DB');
}

async function assureUniqueWeatherData(db, weatherData) {
  return await dbConnection.getWeatherDataByIdAndTimestamp(db, weatherData.ID, weatherData.TIMESTAMP);
}

module.exports = {
  'validateSensorDataInBody': validateSensorDataInBody,
  'validateSensorLocation': validateSensorLocation,
  'insertWeatherData': insertWeatherData,
};
