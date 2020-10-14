const helper = require('../helper');
const testData = require('./testData');

testReduceElementsToMaxSize();

function testReduceElementsToMaxSize(){
    const testSensorData = testData.testSensorData.sensorData;
    let maxSizes = Array.from(Array(testSensorData.length * 2).keys());

    maxSizes.forEach(maxSize => {
        let reducedData = helper.reduceElementsToMaxSize(testSensorData, testSensorData, maxSize, 0);
        console.assert(reducedData.length === Math.min(maxSize, testSensorData.length),
            `${maxSize}, ${testSensorData.length}, ${reducedData.length}`);
    })
}
