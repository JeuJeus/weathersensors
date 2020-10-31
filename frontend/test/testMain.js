const expect = require('chai').expect;
const {JSDOM} = require('jsdom');
const jsdom = require('jsdom-global')();
const App = require('../resources/js/GeileTypenWetterApp');
const c = require('../resources/js/Constants');

global.window = window;
global.$ = require('jquery');
global.jQuery = $;

describe('-- APP TESTS -- ', () => {
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
    it('creates the App in node which has correct SERVER_URI', (done) => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR, c.SENSOR_COLOR);
      app.setUpdateInterval(c.UPDATE_INTERVAL);
      app.init();
      expect(app.serverURI).to.deep.equal(c.SERVER_URI);
      done();
    });
  });
});
