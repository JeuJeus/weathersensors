const moment = require('./moment/moment.min');
function mapValuesOfData(data) {
  const timestamps = data.sensorData.map(
    (e) => new Date(parseFloat(e.TIMESTAMP)).toLocaleString('de-DE'),
  );
  const temperature = data.sensorData.map(
      (e) => e.TEMPERATURE,
  );
  const humidity = data.sensorData.map(
      (e) => e.HUMIDITY,
  );
  const airPressure = data.sensorData.map(
      (e) => e.AIRPRESSURE,
  );
  return {timestamps, temperature, airPressure, humidity};
}

async function getSensorDataFromServer(sensorToPlot, granularity, rangeEnabled, timeRangeStart, timeRangeEnd, serverURI) {
  const query = createQuery(granularity, rangeEnabled, timeRangeStart, timeRangeEnd);
  return await $.get(serverURI + '/sensorData/id/' + sensorToPlot, query);
}

async function getSensorFromServer(sensorToPlot, serverURI) {
  return await $.get(serverURI + '/sensor/id/' + sensorToPlot);
}

async function getSensorsFromServer(serverURI) {
  return await $.get(serverURI + '/sensors/');
}

function createQuery(granularity, rangeEnabled, timeRangeStart, timeRangeEnd) {
  const query = {};
  query['granularity'] = granularity;
  if (rangeEnabled) {
    if (isAssigned(timeRangeStart)) {
      query['timerange_start'] = moment(timeRangeStart, 'DD.MM.YYYY, HH:mm:ss').unix()*1000;
    }
    if (isAssigned(timeRangeEnd)) {
      query['timerange_end'] = moment(timeRangeEnd, 'DD.MM.YYYY, HH:mm:ss').unix()*1000;
    }
  }
  return query;
}

function isAssigned(varToCheck) {
  return ((typeof (varToCheck) !== 'undefined') && (varToCheck !== null));
}

module.exports = {
  'mapValuesOfData': mapValuesOfData,
  'getSensorDataFromServer': getSensorDataFromServer,
  'getSensorFromServer': getSensorFromServer,
  'getSensorsFromServer': getSensorsFromServer,
  'createQuery': createQuery,
};
