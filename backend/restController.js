const dbConnection = require('./databaseConnection');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express()

let httpServer = http.createServer(app);
let db = dbConnection.openDb();
let logger = function (req, res, next) {
    console.log("GOT REQUEST !");
    next(); // Passing the request to the next handler in the stack.
}

app.use(bodyParser.json({inflate: true, limit: '100kb', type: 'application/json'}));
app.use(logger);


httpServer.listen(3000, '192.168.179.21', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Started on PORT 3000");
    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
})
 
app.get('/weatherData', async function (req, res) {
    res.set('Access-Control-Allow-Origin', '*'); // Security not needed xD
    let response = {
        "sensors": [],
        "sensorData": []
    };
    let sensors = await dbConnection.getSensors(db);
    let sensorData = await dbConnection.getSensorData(db);
    response.sensors = sensors;
    response.sensorData = sensorData;
    res.send(response);
})
app.post('/weatherData', function (req, res) {
    if(req.body){
        dbConnection.insertWeatherData(db, req.body);
    }else{
        console.log("parsing body failed");
    }   
    res.send('dirty boy dont use penis.js');
});


function cleanup() {
    console.log("shutting down -- " + Date.now());
    dbConnection.closeDb(db);
    process.exit(1);
}

