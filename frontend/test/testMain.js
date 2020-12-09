const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
//defining url for globals jsdom is needed in order to fix local storage testing
const jsdom = require('jsdom-global')(undefined, {url: 'http://localhost'});
const {JSDOM} = require('jsdom');
const App = require('../resources/js/WeathersensorsApp');
const c = require('../resources/js/Constants');
const env = require('../env');
const sinon = require('sinon');
const faker = require('faker');
const AppController = require('../resources/js/WeathersensorsAppController');
const appTrend = require('../resources/js/AppTrend');

global.window = window;
global.$ = require('jquery');
global.jQuery = $;

const wastedApp = new App.WeathersensorsApp(env.SERVER_URI);
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
      const app = new App.WeathersensorsApp(env.SERVER_URI);
      app.setColors(c.TEMPERATURE_COLOR, c.AIRPRESSURE_COLOR, c.HUMIDITY_COLOR, c.SENSOR_COLOR);
      app.setUpdateInterval(env.UPDATE_INTERVAL_MILLIS);
      try{
        await app.init();
      }catch (e) {
        console.log(e);
      }
      expect(app.serverURI).to.deep.equal(env.SERVER_URI);
    });
  });

  describe('app-methods', () => {

    //Trend Calculation is tested seperatly
    sinon.stub(appTrend, 'updateTrends');

    it('should return correct trafficLightColors', async () => {
      const app = new App.WeathersensorsApp(env.SERVER_URI);
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
      const app = new App.WeathersensorsApp(env.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      expect(app.sensors.length).to.not.equal(0);
    });

    it('should have sensorData', async () => {
      const app = new App.WeathersensorsApp(env.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      expect(app.sensorData.length).to.not.equal(0);
    });

    it('should have all sensors in dropdown', async () => {
      const app = new App.WeathersensorsApp(env.SERVER_URI);
      app.sendIntervalESPMinutes = 5;
      await app.init();
      expect(app.sensors.length).to.deep.equal(app.sensorSelectDropdown.childNodes.length);
    });
  });

  describe('calculating Trends', () => {
    let nowSample = '26.11.2020, 16:16:31';
    let nowUnix = 1606403791;
    let specificSensor = document.createElement('div');

    it('should get correct lower bounds when sensorData bigger than granularity', async () => {
      let sensorData = {timestamps: [1, 2, 3]};
      expect(appTrend.getLowerBoundGranularityOrSensordataLength(sensorData, 1)).to.equal(1);
    });

    it('should format timestamp correctly', function() {
      expect(appTrend.formatTimeStringToUnix(nowSample)).to.deep.equal(nowUnix);
    });

    it('should create correct tuples of data for given input', function() {
      let timeStampsSample = [nowSample, nowSample, nowSample];
      let sensorDataSample = [12.5, 24.5, 18.5];
      let expectedOutput = [[nowUnix, 12.5], [nowUnix, 24.5], [nowUnix, 18.5]];

      expect(appTrend.createDataPointTuples(timeStampsSample, sensorDataSample, 3))
        .to.eql(expectedOutput);
    });

    it('should set trend falling if Trend is falling', function() {
      appTrend.setTrend(specificSensor, 1, -0.3);
      expect(specificSensor.classList.contains('trend-falling')).to.be.true;
    });

    it('should set trend stagnant if Trend is stagnant', function() {
      appTrend.setTrend(specificSensor, 1, 0);
      expect(specificSensor.classList.contains('trend-stagnant')).to.be.true;
    });

    it('should set trend rising if Trend is rising', function() {
      appTrend.setTrend(specificSensor, 1, 0.3);
      expect(specificSensor.classList.contains('trend-rising')).to.be.true;
    });
  });

});

