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
    let sensors = [];
    db.each("SELECT ID, MAC_ADDRESS, LOCATION FROM SENSOR", 
    (err, row) => {
        if (err) {
            console.log(err)
        }
        else {
            sensors.push( {
                "id": row.ID,
                "mac_address": row.MAC_ADDRESS,
                "location": row.LOCATION
            })
            // console.log(sensors);
        }
    });
    console.log(sensors);
    return sensors;
}

function insertDummySensors(db) {
    for (let i = 0; i < 10; i++) {
        db.run("INSERT INTO SENSOR (ID, MAC_ADDRESS, LOCATION) VALUES (?, ?, ?)", [
            i,
            "127.0.0.1",
            "Paderboring"
        ]
        )
    }
}

module.exports = {
    "openDb": openDb,
    "init": init,
    "getSensors": getSensors,
    "insertDummySensors": insertDummySensors,
    "closeDb": closeDb
}
