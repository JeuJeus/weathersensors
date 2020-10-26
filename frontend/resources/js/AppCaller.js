const c = require('./Constants');
const App = require('./GeileTypenWetterApp');
// creating app
const app = new App.GeileTypenWetterApp(c.SERVER_URI,
  '#granularity', '#yAxisToggleButton', 'sensorPlotting',
  'sensorPlottingLocation', 'temperatureNow', 'humidityNow',
  'airPressureNow', 'sensorForChartDropdown', '#yAxisToggleButton',
  'sensorPlottingLocation', 'temperatureNow', 'humidityNow', 'airPressureNow', 'sensorForChartDropdown',
  'dateTimeRange');

app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR);
app.setUpdateInterval(c.UPDATE_INTERVAL);
app.init();
