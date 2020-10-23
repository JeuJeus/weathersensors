const c = require('./Constants');
// create sensorTable
const SensorTableFiller = require('./SensorTableFiller');
const sensorTableFiller = new SensorTableFiller.SensorTableFiller(c.SERVER_URI);
sensorTableFiller.init();
