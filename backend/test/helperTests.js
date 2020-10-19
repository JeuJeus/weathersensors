const expect = require('chai').expect;
const helper = require('../src/helper');
const testData = require('./testData');


describe('reduceElementsToMaxSize()', () => {
  const testD = testData.testSensorData.sensorData;
  it('with 0 as maxSize', () => {
    expect(helper.reduceElementsToMaxSize(testD, 0)).to.deep.equal([]);
  });

  it('with maxSize > length', () => {
    expect(helper.reduceElementsToMaxSize(testD, testD.length+1)).to.equal(testD);
  });
});
