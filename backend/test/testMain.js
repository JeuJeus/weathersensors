const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const sinon = require('sinon');
const faker = require('faker');

const helper = require('../src/helper');
const restController = require('../src/restController');
const alert = require('../src/inactivityEmailAlert');
const testData = require('./testData');
const dbConnection = require('../src/databaseConnection');
const mailSender = require('../src/mailSender');

//TODO clean up and extract into own classes
describe('-- HELPER TESTS -- ', () => {
  describe('it should reduce data points array to maximum specified size', () => {
    const testD = testData.createTimeFilterTestData(1000);
    it('with 0 as maxSize', () => {
      expect(helper.reduceElementsToMaxSize(testD, 0)).to.deep.equal([]);
    });

    it('with maxSize > length', () => {
      expect(helper.reduceElementsToMaxSize(testD, testD.length + 1)).to.equal(testD);
    });

    it('with valid maxSize', () => {
      expect(helper.reduceElementsToMaxSize(testD, testD.length / 2).length).to.deep.equal(testD.length / 2);
    });

    it('should assure keeping last element', () => {
      let reduced = helper.reduceElementsWhilstAssuringKeepLastElement(testD, testD.length / 2);
      expect(reduced.length).to.deep.equal(Math.round(testD.length / 2));
      expect(reduced[reduced.length - 1]).to.deep.equal(testD[testD.length - 1]);
    });
  });

  describe('it should filter data points by begin and endtimestamp', () => {
    // here index = timestamp
    const dataToFilter = testData.createTimeFilterTestData(100);
    it('with timerange 7-23', () => {
      const filteredTestData = helper.filterTimeRange(dataToFilter, 7, 23);
      filteredTestData.forEach((x, i) => {
        expect(filteredTestData[i].TIMESTAMP).to.equal(7 + i);
        expect(filteredTestData[filteredTestData.length - 1].TIMESTAMP).to.equal(23);
      });
    });
    it('with timerange bigger than array size', () => {
      expect(dataToFilter.length).to.be.lessThan(1000);
      const filteredTestData = helper.filterTimeRange(dataToFilter, 0, 1000);
      filteredTestData.forEach((x, i) => {
        expect(filteredTestData[i].TIMESTAMP).to.equal(i);
      });
      expect(filteredTestData[filteredTestData.length - 1].TIMESTAMP).to.equal(filteredTestData.length - 1);
    });
    it('with start- and endvalues not in array', () => {
      expect(dataToFilter.length).to.be.lessThan(1000);
      const filteredTestData = helper.filterTimeRange(dataToFilter, -100, 1000);
      filteredTestData.forEach((x, i) => {
        expect(filteredTestData[i].TIMESTAMP).to.equal(i);
      });
      expect(filteredTestData[filteredTestData.length - 1].TIMESTAMP).to.equal(filteredTestData.length - 1);
    });
  });
});

describe('-- REST CONTROLLER -- ', () => {
  const stubSensorsData = [{
    SENSOR_ID: faker.random.number(),
    TIMESTAMP: new Date().toISOString(),
    TEMPERATURE: faker.random.float(),
    AIRPRESSURE: faker.random.float(),
    HUMIDITY: faker.random.float(),
  }];
  const stubSensorInsertData = {
    API_TOKEN: '$NODEMCU_API_TOKEN',
    MAC_ADDRESS: 'aa:bb:cc:dd:ee:ff',
    TIMESTAMP: '1604248997',
    TEMPERATURE: '20.0',
    AIRPRESSURE: '1000.0',
    HUMIDITY: '50.0',
  };
  const stubSensors = [{
    ID: faker.random.number(),
    MAC_ADRESS: faker.internet.mac(),
    LOCATION: faker.address.city(),
    LAST_UPDATE: Date.now() - (40 * 60 * 1000),
  }];
  chai.use(chaiHttp);

  sinon.stub(dbConnection, 'getSensors').returns(stubSensors);
  sinon.stub(dbConnection, 'getSensorData').returns(stubSensorsData);
  sinon.stub(dbConnection, 'getSensorDataById').returns(stubSensorsData);
  sinon.stub(dbConnection, 'getSensorById').returns(stubSensors);
  sinon.stub(dbConnection, 'getSensorByMACAddress').returns(stubSensors);

  const checkForDuplicateStub = sinon.stub(dbConnection, 'getWeatherDataByIdAndTimestamp');
  checkForDuplicateStub
    .withArgs(sinon.match.any,
      stubSensorInsertData.ID,
      stubSensorInsertData.TIMESTAMP * 1000)
    .onCall(0)
    .returns(undefined);
  checkForDuplicateStub
    .withArgs(sinon.match.any,
      stubSensorInsertData.ID,
      stubSensorInsertData.TIMESTAMP * 1000)
    .onCall(1)
    .returns(stubSensorsData);

  sinon.stub(dbConnection, 'assignSensorIDByMACIfNotExists').returns(stubSensors);
  sinon.stub(dbConnection, 'insertWeatherData');
  sinon.stub(dbConnection, 'updateSensorLocation');

  describe('when get /weatherData', () => {
    it('should return valid data when calling get', () => {
      chai.request('http://localhost:3000')
        .get('/weatherData')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.sensorData[0]).to.deep.equal(stubSensorsData[0]);
          expect(res.body.sensors[0]).to.deep.equal(stubSensors[0]);
        });
    });
  });

  describe('when get /sensorData/id/:SENSOR_ID', () => {
    it('should return valid sensordata when calling get with valid id', () => {
      chai.request('http://localhost:3000')
        .get('/sensorData/id/1')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.sensorData[0]).to.deep.equal(stubSensorsData[0]);
        });
    });
    it('should throw error when calling without valid id', () => {
      chai.request('http://localhost:3000')
        .get('/sensorData/id/awe')
        .end((err, res) => {
          res.should.have.status(400);
        });
    });
    it('should reduce granularity when giving param', () => {
      sinon.stub(helper, 'reduceElementsToMaxSize').returns(stubSensorsData);
      chai.request('http://localhost:3000')
        .get('/sensorData/id/1')
        .query({granularity: 250})
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.sensorData[0]).to.deep.equal(stubSensorsData[0]);
        });
    });
  });

  describe('when get /sensors', () => {
    it('should return valid sensors when calling get', () => {
      chai.request('http://localhost:3000')
        .get('/sensors')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.sensors[0]).to.deep.equal(stubSensors[0]);
        });
    });
  });

  describe('when get /sensor/id/:SENSOR_ID', () => {
    it('should return valid sensor when calling get with valid id', () => {
      chai.request('http://localhost:3000')
        .get('/sensor/id/1')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.sensor[0]).to.deep.equal(stubSensors[0]);
        });
    });
    it('should return 404 when id not found or wrong', () => {
      chai.request('http://localhost:3000')
        .get('/sensors/id/awe')
        .end((err, res) => {
          res.should.have.status(404);
        });
    });
  });

  describe('it should validate Sensor Data in POST Request', () => {
    it('should be valid when posting valid data', () => {
      chai.request('http://localhost:3000')
        .post('/weatherData')
        .send({
          API_TOKEN: '$NODEMCU_API_TOKEN',
          MAC_ADDRESS: 'f4:cf:a2:d1:49:3e',
          TIMESTAMP: Date.now(),
          TEMPERATURE: '20.930000',
          AIRPRESSURE: '1008.037476',
          HUMIDITY: '50.763672',
        })
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
    it('should return error when posting invalid data', () => {
      chai.request('http://localhost:3000')
        .post('/weatherData')
        .send({
          MAC_ADDRESS: 'werdasliestistdoof',
          TIMESTAMP: '187',
          TEMPERATURE: '20.93as0000',
          AIRPRESSURE: 'downmitdemfunk',
          HUMIDITY: '50.763672',
        })
        .end((err, res) => {
          res.should.have.status(400);
        });
    });

    it('should return error when posting duplicate data', () => {
      chai.request('http://localhost:3000')
        .post('/weatherData')
        .send(stubSensorInsertData)
        .end((err, res) => {
          res.should.have.status(200);
        });
      chai.request('http://localhost:3000')
        .post('/weatherData')
        .send(stubSensorInsertData)
        .end((err, res) => {
          res.should.have.status(400);
        });
    });
  });

  describe('it should validate sensor when renaming with POST Request', () => {
    it('should be renamed when posting valid data', () => {
      chai.request('http://localhost:3000')
        .post('/updateSensorLocation')
        .send({
          API_TOKEN: 'aGllckv2bm50ZUlocmVXZXJidW5nU3RlaGVu',
          ID: 1,
          LOCATION: 'Paderboring',
        })
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
    it('should return 400 when posting invalid data', () => {
      chai.request('http://localhost:3000')
        .post('/updateSensorLocation')
        .send({
          API_TOKEN: 'c2FhYWFpaWlpdGVuYmFjaGVy',
          ID: 'test',
          LOCATION: 1,
        })
        .end((err, res) => {
          res.should.have.status(400);
        });
    });
    it('should return 400 when missing authentication', () => {
      chai.request('http://localhost:3000')
        .post('/updateSensorLocation')
        .send({
          ID: 'test',
          LOCATION: 1,
        })
        .end((err, res) => {
          res.should.have.status(400);
        });
    });
  });
});

describe('-- INACTIVITY MAIL CRON JOB --', () => {
  //TODO ADD MORE TESTS FOR BETTER COVERAGE
  afterEach(function() {
    sinon.restore();
  });

  const nowSensorDataNoNotificationSent = {
    LAST_UPDATE: Date.now(),
    INACTIVITY_NOTIFICATION_SENT: 0,
    ID: 1,
  };
  const oneHourOldSensorNotificationSent = {
    LAST_UPDATE: (Date.now() - (60 * 60 * 1000)),
    INACTIVITY_NOTIFICATION_SENT: 1,
    ID: 1,
  };
  const oneHourOldSensorNoNotificationSent = {
    LAST_UPDATE: (Date.now() - (60 * 60 * 1000)),
    INACTIVITY_NOTIFICATION_SENT: 0,
    ID: 1,
  };
  const oneHourOldSensorNoNotificationSentMailProblem = {
    LAST_UPDATE: (Date.now() - (60 * 60 * 1000)),
    INACTIVITY_NOTIFICATION_SENT: 0,
    ID: 187,
  };

  it('should determine sensor inactivity when inactive and no notification sent', function() {
    expect(alert.inactivityMailPreconditions(oneHourOldSensorNoNotificationSent)).to.be.true;
  });
  it('should not determine sensor inactivity when active or mail sent', function() {
    expect(alert.inactivityMailPreconditions(nowSensorDataNoNotificationSent)).to.be.false;
    expect(alert.inactivityMailPreconditions(oneHourOldSensorNotificationSent)).to.be.false;
  });

  describe('should send Alert when preconditions met', function() {
    it('should update sensordata on successfull mail', function() {
      sinon.stub(dbConnection, 'updateInactivityNotificationSent');
      let fakeDb = null;
      let mailSend = sinon.stub(mailSender);
      sinon.stub(alert, 'updateNotificationStatus');
      mailSend.sendMail.returns(true);

      alert.sendAlert(fakeDb, oneHourOldSensorNoNotificationSent);
      //TODO FIX ME
      // sinon.assert.calledOnce(dbConnection.updateInactivityNotificationSent);
    });
    it('should not update sensordata on unsuccessfull mail', function() {
      sinon.stub(dbConnection, 'updateInactivityNotificationSent');
      let fakeDb = null;
      let mailSend = sinon.stub(mailSender);
      sinon.stub(alert, 'updateNotificationStatus');
      mailSend.sendMail.returns(false);

      alert.sendAlert(fakeDb, nowSensorDataNoNotificationSent);

      sinon.assert.notCalled(dbConnection.updateInactivityNotificationSent);
    });
  });
});

