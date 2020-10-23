const c = require('./Constants');
const App = require('./GeileTypenWetterApp');
// creating app
const app = new App.GeileTypenWetterApp(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR, c.SERVER_URI, c.UPDATE_INTERVAL,
  '#granularity', '#yAxisToggleButton', 'sensorPlotting',
  'sensorPlottingLocation', 'temperatureNow', 'humidityNow',
  'airPressureNow', 'sensorForChartDropdown', '#yAxisToggleButton',
  'sensorPlottingLocation', 'temperatureNow', 'humidityNow', 'airPressureNow', 'sensorForChartDropdown');
app.init();
// create sensorTable
const SensorTableFiller = require('./SensorTableFiller');
const sensorTableFiller = new SensorTableFiller.SensorTableFiller(c.SERVER_URI);
sensorTableFiller.init();
