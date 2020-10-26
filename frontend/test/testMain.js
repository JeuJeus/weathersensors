const expect = require('chai').expect;
const {JSDOM} = require('jsdom'); // no idea why curly braces needed
const App = require('../resources/js/GeileTypenWetterApp');
const c = require('../resources/js/Constants');
App.constants = require('../resources/js/Constants');
global.$ = require('jquery-jsdom');

const JSDOM_OPTIONS = {
  // resources: 'usable',
  // runScripts: 'dangerously',
};

async function setJSDom() {
  const dom = await JSDOM.fromFile('static/index.html', JSDOM_OPTIONS);
  global.window = dom.window;
  global.document = dom.window.document;
}
describe('-- APP TESTS -- ', () => {
  before(async () => {
    await setJSDom();
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
      const app = new App.GeileTypenWetterApp(c.SERVER_URI, '#dateTimeRange');
      app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR);
      app.setUpdateInterval(c.UPDATE_INTERVAL);
      app.init();
      expect(app.serverURI).to.deep.equal(App.constants.SERVER_URI);
    });
  });
});
