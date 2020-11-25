function calculateTrends(sensorData, specificSensor, granularity) {
  let dataLength = getLowerBoundGranularityOrSensordataLength(sensorData, granularity);
  let trendData = createDataPointTuples(sensorData.timestamps.slice(-dataLength), specificSensor.slice(-dataLength), dataLength);
  console.log(trendData);
  let trendTemperature = ss.linearRegression(trendData);
  console.log(trendTemperature);
}

function createDataPointTuples(timestamps, specificSensor, length) {
  return Array.from({length: length}, (x, i) => {
    return [moment(timestamps[i], 'DD.MM.YYYY, HH.mm.ss').unix(), specificSensor[i]];
  });
}

function getLowerBoundGranularityOrSensordataLength(sensorData, granularity) {
  return sensorData.timestamps.length < granularity ? sensorData.timestamps.length : granularity;
}

module.exports = {
  calculateTrends: calculateTrends,
};
