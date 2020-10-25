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
  // TODO STREAM WRITE INSTEAD OF CONSOLE LOG JB
  console.log(`${new Date().toISOString()} - RECEIVED MACADDRESS [${MACADDRESS}]`);
  await dbConnection.assignSensorIDByMACIfNotExists(db, MACADDRESS);
  return dbConnection.getSensorIDByMAC(db, MACADDRESS);
}

async function insertWeatherData(db, weatherData) {
  const result = await getIdFromMacaddress(db, weatherData.MACADDRESS);
  weatherData.ID = result.ID;
  return dbConnection.insertWeatherData(db, weatherData);
}

module.exports = {
  'validateSensorDataInBody': validateSensorDataInBody,
  'validateSensorLocation': validateSensorLocation,
  'insertWeatherData': insertWeatherData,
};
