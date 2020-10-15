const util = require('util');

function openDb() {
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('./db/data.db');
  db.run = util.promisify(db.run);
  db.get = util.promisify(db.get);
  db.all = util.promisify(db.all);
  return db;
}

function closeDb(db) {
  db.close();
}

async function init(db) {
  const createSensorTable = `CREATE TABLE IF NOT EXISTS "SENSOR" (` +
    `"ID"	INTEGER NOT NULL UNIQUE, ` +
    `"MAC_ADDRESS"	TEXT NOT NULL, ` +
    `"LOCATION"	TEXT NOT NULL,` +
    ` PRIMARY KEY("ID" AUTOINCREMENT)` +
    `)`;

  const createSensorDataTable = `CREATE TABLE IF NOT EXISTS "SENSOR_DATA" (` +
    ` "SENSOR_ID"	INTEGER NOT NULL,` +
    ` "TIMESTAMP" TEXT NOT NULL,` +
    ` "TEMPERATURE" NUMERIC NOT NULL,` +
    ` "AIRPRESSURE" NUMERIC NOT NULL,` +
    ` "HUMIDITY"	NUMERIC NOT NULL,` +
    ` PRIMARY KEY("SENSOR_ID","TIMESTAMP")` +
    `)`;

  await db.run(createSensorTable);
  await db.run(createSensorDataTable);
}

async function getSensors(db) {
  let sql = 'SELECT ID, MAC_ADDRESS, LOCATION ' +
    'FROM SENSOR';
  let params = [];
  return db.all(sql, params);
}

async function getSensorById(db, SENSOR_ID) {
  let sql = 'SELECT ID, MAC_ADDRESS, LOCATION ' +
    'FROM SENSOR ' +
    'WHERE ID = ?';
  let params = [SENSOR_ID];
  return db.all(sql, params);
}

async function getSensorData(db) {
  let sql = 'SELECT SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY ' +
    'FROM SENSOR_DATA';
  let params = [];
  return db.all(sql, params);
}

async function getSensorDataById(db, SENSOR_ID) {
  let sql = 'SELECT SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY ' +
        'FROM SENSOR_DATA ' +
        'WHERE SENSOR_ID = ?';
  let params = [SENSOR_ID];
  return db.all(sql, params);
}

async function insertWeatherData(db, weatherData) {
  let sql =  'INSERT INTO SENSOR_DATA (SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY) ' +
    'VALUES (?, ?, ?, ?, ?)';
  let params = [weatherData.SENSOR_ID, weatherData.TIMESTAMP, weatherData.TEMPERATURE, weatherData.AIRPRESSURE, weatherData.HUMIDITY];
  db.run(sql, params);
}

module.exports = {
  'openDb': openDb,
  'init': init,
  'getSensors': getSensors,
  'getSensorData': getSensorData,
  'getSensorDataById' : getSensorDataById,
  'insertWeatherData': insertWeatherData,
  'closeDb': closeDb,
  'getSensorById': getSensorById,
};
