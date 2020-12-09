const env = require('../../src/env');
// create sensorTable
const AdminApp = require('./AdminApp');
const App = new AdminApp.AdminApp(env.SERVER_URI);
App.init();
