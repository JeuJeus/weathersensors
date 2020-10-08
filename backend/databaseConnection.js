const util = require('util')

function openDb() {
    let sqlite3 = require('sqlite3').verbose()
    let db = new sqlite3.Database('./db/data.db')
    db.run = util.promisify(db.run)
    db.get = util.promisify(db.get)
    db.all = util.promisify(db.all)
    return db
}

function closeDb(db) {
    db.close()
}

async function init(db) {
    var createSensorTable = "CREATE TABLE IF NOT EXISTS \"SENSOR\" (" +
        "\"ID\"	INTEGER NOT NULL UNIQUE, " +
        "\"MAC_ADDRESS\"	TEXT NOT NULL, " +
        "\"LOCATION\"	TEXT NOT NULL," +
        " PRIMARY KEY(\"ID\" AUTOINCREMENT)" +
        ")"

    var createSensorDataTable = "CREATE TABLE IF NOT EXISTS \"SENSOR_DATA\" (" +
        "\"SENSOR_ID\"	INTEGER NOT NULL," +
        " \"TIMESTAMP\" TEXT NOT NULL," +
        " \"TEMPERATURE\" NUMERIC NOT NULL," +
        " \"AIRPRESSURE\" NUMERIC NOT NULL," +
        " \"HUMIDITY\"	NUMERIC NOT NULL," +
        " PRIMARY KEY(\"SENSOR_ID\",\"TIMESTAMP\")" +
        ")"
   
    await db.run(createSensorTable)
    await db.run(createSensorDataTable)
}

async function getSensors(db) {
    sql = "SELECT ID, MAC_ADDRESS, LOCATION " +
          "FROM SENSOR"
    params = []
    return db.all(sql, params)
}

async function getSensorData(db) {
    sql = "SELECT SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY " +
          "FROM SENSOR_DATA"
    params = []
    return db.all(sql, params)
}

async function insertWeatherData(db, weatherData){
    sql =   "INSERT INTO SENSOR_DATA (SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY) "+
            "VALUES (?, ?, ?, ?, ?)"
    params = [weatherData.SENSOR_ID, weatherData.TIMESTAMP, weatherData.TEMPERATURE, weatherData.AIRPRESSURE, weatherData.HUMIDITY]
    db.run(sql, params)
}

module.exports = {
    "openDb": openDb,
    "init": init,
    "getSensors": getSensors,
    "getSensorData": getSensorData,
    "insertWeatherData": insertWeatherData,
    "closeDb": closeDb
}
