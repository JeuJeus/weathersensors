const expect = require('chai').expect;
const {JSDOM} = require('jsdom'); // no idea why curly braces needed
const App = require('../resources/js/GeileTypenWetterApp');
App.constants = require('../resources/js/Constants');
global.$ = require('jquery-jsdom');

const JSDOM_OPTIONS = {
  // resources: 'usable',
  // runScripts: 'dangerously',
};

describe('-- APP TESTS -- ', () => {
  const x = JSDOM.fromFile('index.html', JSDOM_OPTIONS)
      .then((dom) => {
        global.window = dom.window;
        global.document = dom.window.document;
      });
  describe('reading dom elements from html file', () => {
    it('global.document working', () => {
      expect(document.querySelector('p')).to.not.equal(undefined);
    });
  });

  describe('static App functions', () => {
    it('isInt', () => {
      expect(App.isInt(123)).to.deep.equal(true);
    });
  });

  describe('creating our App', () => {
    it('creates the App in node which has correct SERVER_URI', () => {
      const app = new App.GeileTypenWetterApp(App.constants.TEMPERATURE_COLOR, App.constants.AIRPRESSURE_COLOR, App.constants.HUMIDITY_COLOR, App.constants.SERVER_URI, App.constants.UPDATE_INTERVAL,
          '#granularity', '#yAxisToggleButton', 'sensorPlotting',
          'sensorPlottingLocation', 'temperatureNow', 'humidityNow',
          'airPressureNow', 'sensorForChartDropdown', '#yAxisToggleButton',
          'sensorPlottingLocation', 'temperatureNow', 'humidityNow', 'airPressureNow', 'sensorForChartDropdown');
      app.init();
      expect(app.serverURI).to.deep.equal(App.constants.SERVER_URI);
    });
  });
});
