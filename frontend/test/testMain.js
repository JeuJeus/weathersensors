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
    it('should the App in node with correct SERVER_URI', (done) => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR, c.SENSOR_COLOR);
      app.setUpdateInterval(c.UPDATE_INTERVAL);
      app.init();
      expect(app.serverURI).to.deep.equal(c.SERVER_URI);
      done();
    });
  });

  describe('app-methods', () => {
    it('should return correct trafficLightColors', (done) => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      app.init();
      const nowSeconds = Date.now() / 1000;
      const secondsOneHourAgo = nowSeconds - 60 * 60;
      const secondsFiveteenMinutesAgo = nowSeconds - 60 * 15;
      const colorRed = app.getTrafficLightClassBasedOnUpdateAge(secondsOneHourAgo);
      const colorYellow = app.getTrafficLightClassBasedOnUpdateAge(secondsFiveteenMinutesAgo);
      const colorGreen = app.getTrafficLightClassBasedOnUpdateAge(nowSeconds);

      expect(colorRed.class).to.deep.equal(c.TRAFFIC_LIGHT_CLASSES.RED);
      expect(colorYellow.class).to.deep.equal(c.TRAFFIC_LIGHT_CLASSES.YELLOW);
      expect(colorGreen.class).to.deep.equal(c.TRAFFIC_LIGHT_CLASSES.GREEN);
      done();
    });
  });

});
