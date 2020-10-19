const expect = require('chai').expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const helper = require('../src/helper');
const restController = require('../src/restController');
const testData = require('./testData');

describe('-- HELPER TESTS -- ', () => {
  describe('it should reduce data points array to maximum specified size', () => {
    const testD = testData.testSensorData.sensorData;
    it('with 0 as maxSize', () => {
      expect(helper.reduceElementsToMaxSize(testD, 0)).to.deep.equal([]);
    });

    it('with maxSize > length', () => {
      expect(helper.reduceElementsToMaxSize(testD, testD.length + 1)).to.equal(testD);
    });
  });
});

describe('-- REST CONTROLLER -- ', () => {
  describe('it should validate Sensor Data in POST Request', () => {
    chai.use(chaiHttp);
    it('should be valid when posting valid data', () => {
      chai.request('http://localhost:3000')
        .post('/weatherData')
        .send({
          MACADDRESS: 'f4:cf:a2:d1:49:3e',
          TIMESTAMP: '0',
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
});

