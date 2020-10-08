const dbConnection = require('./databaseConnection')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({ inflate: true, limit: '100kb', type: 'application/json' }));

let db = dbConnection.openDb()

app.listen(3000,() => {
    console.log("Started on PORT 3000");
    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
})
 
app.get('/weatherData', async function (req, res) {
    res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
    let response = {"sensors" : [],
                    "sensorData" : []
                };
    let sensors = await dbConnection.getSensors(db)
    let sensorData = await dbConnection.getSensorData(db)
    response.sensors = sensors
    response.sensorData = sensorData
    res.send(response)
})
app.post('/weatherData', function (req, res) {
    dbConnection.insertWeatherData(db, req.body)
    res.send('dirty boy dont use penis.js');
});
  

function cleanup(){
    console.log("shutting down -- " + Date.now());
    dbConnection.closeDb(db)
    process.exit(1)
}

