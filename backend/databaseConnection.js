// db.serialize(function() {
//     db.run("CREATE TABLE lorem (info TEXT)");
//
//     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (var i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();
//
//     db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//         console.log(row.id + ": " + row.info);
//     });
// });
function openDb() {
    let sqlite3 = require('sqlite3').verbose()
    return new sqlite3.Database('./db/data.db')
}

function closeDb(db) {
    db.close()
}

function init(db) {
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

    db.run(createSensorTable)
    db.run(createSensorDataTable)
}

function getSensors(db) {
    sql = "SELECT ID, MAC_ADDRESS, LOCATION " +
          "FROM SENSOR"
    params = []
    return new Promise((resolve, reject) =>
        db.all(sql, params, (err, rows) => {
            if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
            } else {
                resolve(rows)
            }
        }))
}

function getSensorData(db) {
    sql = "SELECT SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY " +
          "FROM SENSOR_DATA"
    params = []
    return new Promise((resolve, reject) =>
        db.all(sql, params, (err, rows) => {
            if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
            } else {
                resolve(rows)
            }
        }))
}

module.exports = {
    "openDb": openDb,
    "init": init,
    "getSensors": getSensors,
    "getSensorData": getSensorData,
    "closeDb": closeDb
}
