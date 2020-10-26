const c = require('./Constants');
// create sensorTable
const AdminApp = require('./AdminApp');
const App = new AdminApp.AdminApp(c.SERVER_URI);
App.init();
