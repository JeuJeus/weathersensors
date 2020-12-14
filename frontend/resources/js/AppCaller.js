const c = require('./Constants');
const env = require('../../src/env');
const App = require('./WeathersensorsApp');
// creating app
const app = new App.WeathersensorsApp(env.SERVER_URI);
app.setDomElements('#granularity-input', '#y-axis-toggle-button', '#sensor-id-text',
  '#sensor-location-text', '#temperature-current-value', '#humidity-current-value',
  '#airpressure-current-value', '#temperature-trend', '#humidity-trend',
  '#airpressure-trend', '#sensor-dropdown', '#reset-range-button',
  '#chart-container', '#date-time-range-picker', '#darkmode-button', '#darkmode-icon', '#pagestyle');
app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR);
app.setUpdateInterval(env.UPDATE_INTERVAL_MILLIS);
app.setNodeMcuSendInterval(env.NODEMCU_SEND_INTERVAL);
app.setNumberOfDatapointsForRegression(env.LIN_REGRESSION_DATAPOINT_AMOUNT);
app.init();
