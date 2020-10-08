const dbConnection = require('./databaseConnection')
const express = require('express')
const app = express()

app.get('/getWeatherData', async function (req, res) {
    res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
    let response = {"sensors" : [],
                    "sensorData" : []
                };
    let db = dbConnection.openDb()
    let sensors = await dbConnection.getSensors(db)
    let sensorData = await dbConnection.getSensorData(db)
    response.sensors = sensors
    response.sensorData = sensorData
    res.send(response)
    dbConnection.closeDb(db)
})

app.listen(3000)
