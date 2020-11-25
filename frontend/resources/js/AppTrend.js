function updateTrends(sensorData, granularity, temperatureTrend, humidityTrend, airpressureTrend) {
  //TODO check whether these 'relativeFactors' need to be adapted over time
  setTrend(temperatureTrend, 10000, calculateTrend(sensorData, sensorData.temperature, granularity));
  setTrend(humidityTrend, 10000, calculateTrend(sensorData, sensorData.humidity, granularity));
  setTrend(airpressureTrend, 10000, calculateTrend(sensorData, sensorData.airPressure, granularity));
}

function setTrend(specificSensor, relativeFactor, trendValue) {
  let toCompare = (relativeFactor * parseFloat(trendValue));
  if (toCompare <= (-0.1)) {
    specificSensor.classList = 'trendFalling';
  } else if ((-0.1) <= toCompare && toCompare <= 0.1) {
    specificSensor.classList = 'trendStagnant';
  } else if (0.1 <= toCompare) {
    specificSensor.classList = 'trendRising';
  }
}

function calculateTrend(sensorData, specificSensor, granularity) {
  let dataLength = getLowerBoundGranularityOrSensordataLength(sensorData, granularity);
  let trendData = createDataPointTuples(sensorData.timestamps.slice(-dataLength), specificSensor.slice(-dataLength), dataLength);
  return ss.linearRegression(trendData).m;
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
  updateTrends: updateTrends,
};
