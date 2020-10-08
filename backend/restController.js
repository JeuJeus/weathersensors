const dbConnection = require('./databaseConnection')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
    let db = dbConnection.openDb()
    dbConnection.init(db)
    // dbConnection.insertDummySensors(db)
    let sensors = dbConnection.getSensors(db)
    console.log(sensors);
    dbConnection.closeDb(db)

})

app.listen(3000)
