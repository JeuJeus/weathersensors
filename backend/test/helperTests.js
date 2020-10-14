const helper = require('../helper');
const testData = require('./testData');

testReduceElementsToMaxSize();

function testReduceElementsToMaxSize(){
    const testSensorData = testData.testSensorData.sensorData;
    let maxSizes = Array.from(Array(testSensorData.length +1 ).keys());

    maxSizes.forEach(maxSize => {
        let reducedData = helper.reduceElementsToMaxSize(testSensorData, maxSize, 0);
        if (reducedData.length !== maxSize && maxSize < testSensorData.length){
            console.log(`ERROR :  ${maxSize} > ${reducedData.length}`);
        }
        else if(reducedData.length !== maxSize && maxSize >= testSensorData.length){
            console.log(`WTF :  ${maxSize}, ${reducedData.length}, ${testSensorData.length}`);
        }
    })
}
