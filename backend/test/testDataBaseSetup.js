const dbConnection = require('../databaseConnection');
const db = dbConnection.openDb();

initTables(db).then((x) => {
  insertDummySensors(db);
  insertDummySensorData(db);

  dbConnection.closeDb(db);
});

async function initTables(db) {
  await dbConnection.init(db);
}

function insertDummySensorData(db) {
  for (let i = 0; i < 100; i++) {
    db.run('INSERT INTO SENSOR_DATA (SENSOR_ID, TIMESTAMP, TEMPERATURE, AIRPRESSURE, HUMIDITY) ' +
      'VALUES (?, ?, ?, ?, ?)', [
        i,
        Date.now(),
        21 + i / 10,
        937 + i / 3,
        i / 100,
      ],
    );
  }
}

function insertDummySensors(db) {
  for (let i = 0; i < 10; i++) {
    db.run('INSERT INTO SENSOR (ID, MAC_ADDRESS, LOCATION) ' +
      'VALUES (?, ?, ?)', [
        i,
        '127.0.0.1',
        'Paderboring',
      ],
    );
  }
}

module.exports = {
  'insertDummySensors': insertDummySensors,
  'insertDummySensorData': insertDummySensorData,
};
