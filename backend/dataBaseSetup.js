const dbConnection = require('./databaseConnection')
let db = dbConnection.openDb()

insertDummySensors(db)
insertDummySensorData(db)

function insertDummySensorData(db) {
    for (let i = 0; i < 100; i++) {
        db.run("INSERT INTO SENSOR_DATA (SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY) "+
               "VALUES (?, ?, ?, ?, ?)", [
            i,
            Date.now(),
            21 + i / 10,
            937 + i / 3,
            i / 100
        ]
        )
    }
}

function insertDummySensors(db) {
    for (let i = 0; i < 10; i++) {
        db.run("INSERT INTO SENSOR (ID, MAC_ADDRESS, LOCATION) "+
               "VALUES (?, ?, ?)", [
            i,
            "127.0.0.1",
            "Paderboring"
        ]
        )
    }
}

module.exports = {
    "insertDummySensors": insertDummySensors,
    "insertDummySensorData": insertDummySensorData,
}