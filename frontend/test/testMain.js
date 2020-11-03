const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const {JSDOM} = require('jsdom');
const jsdom = require('jsdom-global')();
const App = require('../resources/js/GeileTypenWetterApp');
const c = require('../resources/js/Constants');
const sinon = require('sinon');
const faker = require('faker');
const AppController = require('../resources/js/GeileTypenWetterAppController');

global.window = window;
global.$ = require('jquery');
global.jQuery = $;

const wastedApp = new App.GeileTypenWetterApp(c.SERVER_URI);
wastedApp.init();

const stubSensorsData = {'sensorData': [{
  SENSOR_ID: faker.random.number(),
  TIMESTAMP: new Date().toISOString(),
  TEMPERATURE: faker.random.float(),
  AIRPRESSURE: faker.random.float(),
  HUMIDITY: faker.random.float(),
}]};
const stubSensors = {'sensors': [{
    ID: faker.random.number(),
    MAC_ADRESS: faker.internet.mac(),
    LOCATION: faker.address.city(),
  },
  {
    ID: faker.random.number(),
    MAC_ADRESS: faker.internet.mac(),
    LOCATION: faker.address.city(),
  }
  ]};
const stubSensor = {'sensor': {
    ID: faker.random.number(),
    MAC_ADRESS: faker.internet.mac(),
    LOCATION: faker.address.city(),
}};

chai.use(chaiHttp);

// Every time the following functions in restController get called, they are mocked here with random values.
sinon.stub(AppController, 'getSensorsFromServer').returns(stubSensors);
sinon.stub(AppController, 'getSensorFromServer').returns(stubSensor);
sinon.stub(AppController, 'getSensorDataFromServer').returns(stubSensorsData);

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
    it('should create the App in node with correct SERVER_URI', async () => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR, c.SENSOR_COLOR);
      app.setUpdateInterval(c.UPDATE_INTERVAL);
      try{
        await app.init();
      }catch (e) {
        console.log(e);
      }
      expect(app.serverURI).to.deep.equal(c.SERVER_URI);
    });
  });

  describe('app-methods', () => {
    it('should return correct trafficLightColors', async () => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      const nowSeconds = Date.now();
      const secondsOneHourAgo = nowSeconds - (1000 * 60 * 60);
      const secondsFiveteenMinutesAgo = nowSeconds - (1000 * 60 * 15);
      const colorRed = app.getTrafficLightClassBasedOnUpdateAge(secondsOneHourAgo);
      const colorYellow = app.getTrafficLightClassBasedOnUpdateAge(secondsFiveteenMinutesAgo);
      const colorGreen = app.getTrafficLightClassBasedOnUpdateAge(nowSeconds);

      expect(colorRed.class).to.deep.equal(c.TRAFFIC_LIGHT_CLASSES.RED);
      expect(colorYellow.class).to.deep.equal(c.TRAFFIC_LIGHT_CLASSES.YELLOW);
      expect(colorGreen.class).to.deep.equal(c.TRAFFIC_LIGHT_CLASSES.GREEN);
    });

    it('should have sensors', async () => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      expect(app.sensors.length).to.not.equal(0);
    });

    it('should have sensorData', async () => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      expect(app.sensorData.length).to.not.equal(0);
    });

    it('should have all sensors in dropdown', async () => {
      const app = new App.GeileTypenWetterApp(c.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      expect(app.sensors.length).to.deep.equal(app.sensorSelectDropdown.childNodes.length);
    });


  });

});


