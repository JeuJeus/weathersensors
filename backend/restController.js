const dbConnection = require('./databaseConnection')
const express = require('express')
const app = express()

app.get('/getWeatherData', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
    let response = {"sensors" : [],
                    "sensorData" : []
                };
    let db = dbConnection.openDb()
    dbConnection.init(db)
    let sensors = dbConnection.getSensors(db)
    let sensorData = dbConnection.getSensorData(db)
    const data = Promise.all([sensors, sensorData]).then(data => {
        response.sensors = data[0]
        response.sensorData = data[1]
        res.send(response)
    })
    dbConnection.closeDb(db)
})

app.listen(3000)
