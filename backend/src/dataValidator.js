const dbConnection = require('./databaseConnection');
const db = dbConnection.openDb();

async function getIdFromMacaddress(db, MACADDRESS) {
  // TODO STREAM WRITE INSTEAD OF CONSOLE LOG JB
  console.log(`${new Date().toISOString()} - RECEIVED MACADDRESS [${MACADDRESS}]`);
  await dbConnection.assignSensorIDByMACIfNotExists(db, MACADDRESS);
  return dbConnection.getSensorIDByMAC(db, MACADDRESS);
}

async function insertWeatherData(weatherData) {
  const result = await getIdFromMacaddress(db, weatherData.MACADDRESS);
  weatherData.ID = result[0].ID;
  return dbConnection.insertWeatherData(db, weatherData);
}

module.exports = {
  'insertWeatherData': insertWeatherData,
};
