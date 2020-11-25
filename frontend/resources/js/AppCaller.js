const c = require('./Constants');
const App = require('./GeileTypenWetterApp');
// creating app
const app = new App.GeileTypenWetterApp(c.SERVER_URI);

app.setDomElements('#granularity-input', '#y-axis-toggle-button', '#sensor-id-text',
  '#sensor-location-text', '#temperature-current-value', '#humidity-current-value',
  '#airpressure-current-value', '#temperature-trend', '#humidity-trend',
  '#airpressure-trend', '#sensor-dropdown', '#reset-range-button',
  '#chart-container', '#date-time-range-picker');
app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR);
app.setUpdateInterval(c.UPDATE_INTERVAL);
app.setNumberOfDatapointsForRegression(c.LATEST_N_DATAPOINTS_AMOUNT);
app.init();
