const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const helper = require('../src/helper');
const restController = require('../src/restController');
const testData = require('./testData');
const dbConnection = require('../src/databaseConnection');
const sinon = require('sinon');
const faker = require('faker');

describe('-- HELPER TESTS -- ', () => {
  describe('it should reduce data points array to maximum specified size', () => {
    const testD = testData.testSensorData.sensorData;
    it('with 0 as maxSize', () => {
      expect(helper.reduceElementsToMaxSize(testD, 0)).to.deep.equal([]);
    });

    it('with maxSize > length', () => {
      expect(helper.reduceElementsToMaxSize(testD, testD.length + 1)).to.equal(testD);
    });

    it('with valid maxSize', () => {
      expect(helper.reduceElementsToMaxSize(testD, testD.length / 2).length).to.deep.equal(testD.length / 2);
    });
  });
});

describe('-- REST CONTROLLER -- ', () => {
  const stubSensorData = [{
    SENSOR_ID: faker.random.number(),
    TIMESTAMP: new Date().toISOString(),
    TEMPERATURE: faker.random.float(),
    AIRPRESSURE: faker.random.float(),
    HUMIDITY: faker.random.float(),

  }];
  const stubSensor = [{
    ID: faker.random.number(),
    MAC_ADRESS: faker.internet.mac(),
    LOCATION: faker.address.city(),
  }];

  chai.use(chaiHttp);

  sinon.stub(dbConnection, 'getSensors').returns(stubSensor);
  sinon.stub(dbConnection, 'getSensorData').returns(stubSensorData);
  sinon.stub(dbConnection, 'getSensorDataById').returns(stubSensorData);
  sinon.stub(dbConnection, 'getSensorById').returns(stubSensor);

  sinon.stub(dbConnection, 'insertWeatherData');

  describe('when get /weatherData', () => {
    it('should return valid data when calling get', () => {
      chai.request('http://localhost:3000')
        .get('/weatherData')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.sensorData[0]).to.deep.equal(stubSensorData[0]);
          expect(res.body.sensors[0]).to.deep.equal(stubSensor[0]);
        });
    });
  });

  describe('when get /sensorData/id/:SENSOR_ID', () => {
    it('should return valid sensordata when calling get with valid id', () => {
      chai.request('http://localhost:3000')
          .get('/sensorData/id/1')
          .end((err, res) => {
            res.should.have.status(200);
            expect(res.body.sensorData[0]).to.deep.equal(stubSensorData[0]);
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
      sinon.stub(helper, 'reduceElementsToMaxSize').returns(stubSensorData);
      chai.request('http://localhost:3000')
          .get('/sensorData/id/1')
          .query({granularity: 250})
          .end((err, res) => {
            res.should.have.status(200);
            expect(res.body.sensorData[0]).to.deep.equal(stubSensorData[0]);
          });
    });
  });

  describe('when get /sensors', () => {
    it('should return valid sensors when calling get', () => {
      chai.request('http://localhost:3000')
          .get('/sensors')
          .end((err, res) => {
            res.should.have.status(200);
            expect(res.body.sensors[0]).to.deep.equal(stubSensor[0]);
          });
    });
  });

  describe('when get /sensor/id/:SENSOR_ID', () => {
    it('should return valid sensor when calling get with valid id', () => {
      chai.request('http://localhost:3000')
          .get('/sensor/id/1')
          .end((err, res) => {
            res.should.have.status(200);
            expect(res.body.sensor).to.deep.equal(stubSensor[0]);
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
              MACADDRESS: 'f4:cf:a2:d1:49:3e',
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
            MACADDRESS: 'werdasliestistdoof',
            TIMESTAMP: '187',
            TEMPERATURE: '20.93as0000',
            AIRPRESSURE: 'downmitdemfunk',
            HUMIDITY: '50.763672',
          })
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

