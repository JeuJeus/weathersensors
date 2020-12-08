const c = require('./Constants');
const App = require('./WeathersensorsApp');
// creating app
const app = new App.WeathersensorsApp(c.SERVER_URI);
//TODO INTRODUCE CONSTANT FILES IN ORDER TO AVOID CHANGING VARIABLE IN FRONTENT AND BACKEND
app.setDomElements('#granularity-input', '#y-axis-toggle-button', '#sensor-id-text',
    '#sensor-location-text', '#temperature-current-value', '#humidity-current-value',
    '#airpressure-current-value', '#temperature-trend', '#humidity-trend',
    '#airpressure-trend', '#sensor-dropdown', '#reset-range-button',
    '#chart-container', '#date-time-range-picker', '#darkmode-button', '#darkmode-icon', '#pagestyle');
app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR);
app.setUpdateInterval(c.UPDATE_INTERVAL);
app.setNumberOfDatapointsForRegression(c.LATEST_N_DATAPOINTS_AMOUNT);
app.init();
