const fs = require('fs');
const util = require('util');
const sqlite3 = require('sqlite3').verbose();

function ensureDbDirSync(dirpath) {
  try {
    return fs.mkdirSync(dirpath);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

function openDb() {
  ensureDbDirSync('db');
  const db = new sqlite3.Database('./db/data.db');
  db.run = util.promisify(db.run);
  db.get = util.promisify(db.get);
  db.all = util.promisify(db.all);
  init(db);
  return db;
}

function closeDb(db) {
  db.close();
}
async function init(db) {
  const createSensorTable = `CREATE TABLE IF NOT EXISTS "SENSOR"
      (` +
      `"ID"	INTEGER NOT NULL UNIQUE, ` +
      `"MAC_ADDRESS"	TEXT NOT NULL, ` +
      `"LOCATION"	TEXT,` +
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
  const sql = 'SELECT ID, MAC_ADDRESS, LOCATION ' +
    'FROM SENSOR';
  const params = [];
  return db.all(sql, params);
}

async function getSensorById(db, SENSOR_ID) {
  const sql = 'SELECT ID, MAC_ADDRESS, LOCATION ' +
    'FROM SENSOR ' +
    'WHERE ID = ?';
  const params = [SENSOR_ID];
  return db.all(sql, params);
}

async function assignSensorIDByMACIfNotExists(db, MACADDRESS) {
  const sql = 'INSERT INTO SENSOR (MAC_ADDRESS) ' +
      'VALUES (?)' +
      'EXCEPT SELECT MAC_ADDRESS FROM SENSOR WHERE MAC_ADDRESS = ?';
  const params = [MACADDRESS, MACADDRESS];
  db.all(sql, params);
  return getSensorIDByMAC(db, MACADDRESS);
}

async function getSensorIDByMAC(db, MACADDRESS) {
  const sql = 'SELECT ID, MAC_ADDRESS, LOCATION ' +
    'FROM SENSOR ' +
    'WHERE MAC_ADDRESS = ?';
  const params = [MACADDRESS];
  return db.all(sql, params);
}

async function getSensorData(db) {
  const sql = 'SELECT SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY ' +
    'FROM SENSOR_DATA';
  const params = [];
  return db.all(sql, params);
}

async function getSensorDataById(db, SENSOR_ID) {
  const sql = 'SELECT SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY ' +
    'FROM SENSOR_DATA ' +
    'WHERE SENSOR_ID = ?';
  const params = [SENSOR_ID];
  return db.all(sql, params);
}

async function insertWeatherData(db, weatherData) {
  const sql = 'INSERT INTO SENSOR_DATA (SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY) ' +
      'VALUES (?, ?, ?, ?, ?)';
  const params = [weatherData.ID, weatherData.TIMESTAMP, weatherData.TEMPERATURE, weatherData.AIRPRESSURE, weatherData.HUMIDITY];
  db.run(sql, params);
}

async function updateSensorLocation(db, sensorLocationData) {
  const sql = 'UPDATE SENSOR SET LOCATION = ? WHERE ID=?';
  const params = [sensorLocationData.LOCATION, sensorLocationData.ID];
  db.run(sql, params);
}

module.exports = {
  'openDb': openDb,
  'init': init,
  'getSensors': getSensors,
  'getSensorData': getSensorData,
  'getSensorDataById': getSensorDataById,
  'insertWeatherData': insertWeatherData,
  'closeDb': closeDb,
  'getSensorById': getSensorById,
  'updateSensorLocation': updateSensorLocation,
  'assignSensorIDByMACIfNotExists': assignSensorIDByMACIfNotExists,
  'getSensorIDByMAC': getSensorIDByMAC,
};
