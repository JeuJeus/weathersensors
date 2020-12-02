const moment = require('moment-timezone');
const statistics = require('simple-statistics');

function updateTrends(sensorData, granularity, temperatureTrend, humidityTrend, airpressureTrend) {
  // TODO check whether these 'relativeFactors' need to be adapted over time
  setTrend(temperatureTrend, 10000, calculateTrend(sensorData, sensorData.temperature, granularity), 'Temperature');
  setTrend(humidityTrend, 10000, calculateTrend(sensorData, sensorData.humidity, granularity), 'Humidity');
  setTrend(airpressureTrend, 10000, calculateTrend(sensorData, sensorData.airPressure, granularity), 'Air Pressure');
}

function setTrend(specificSensor, relativeFactor, trendValue, dataType) {
  const toCompare = (relativeFactor * parseFloat(trendValue));
  if (toCompare <= (-0.1)) {
    specificSensor.classList = 'trend-falling';
    specificSensor.title = dataType + ' is trending downwards.';
  } else if ((-0.1) <= toCompare && toCompare <= 0.1) {
    specificSensor.classList = 'trend-stagnant';
    specificSensor.title = dataType + ' is stagnant.';
  } else if (0.1 <= toCompare) {
    specificSensor.classList = 'trend-rising';
    specificSensor.title = dataType + ' is trending upwards.';
  }
}

function calculateTrend(sensorData, specificSensor, granularity) {
  const dataLength = getLowerBoundGranularityOrSensordataLength(sensorData, granularity);
  const trendData = createDataPointTuples(sensorData.timestamps.slice(-dataLength), specificSensor.slice(-dataLength), dataLength);
  return statistics.linearRegression(trendData).m;
}

function formatTimeStringToUnix(timestamp) {
  return moment.tz(timestamp, 'DD.MM.YYYY, HH.mm.ss', 'Europe/Berlin').unix();
}

function createDataPointTuples(timestamps, specificSensor, length) {
  return Array.from({length: length}, (x, i) => {
    return [formatTimeStringToUnix(timestamps[i]), specificSensor[i]];
  });
}

function getLowerBoundGranularityOrSensordataLength(sensorData, granularity) {
  return sensorData.timestamps.length < granularity ? sensorData.timestamps.length : granularity;
}

module.exports = {
  getLowerBoundGranularityOrSensordataLength: getLowerBoundGranularityOrSensordataLength,
  formatTimeStringToUnix: formatTimeStringToUnix,
  createDataPointTuples: createDataPointTuples,
  updateTrends: updateTrends,
  setTrend: setTrend,
};
