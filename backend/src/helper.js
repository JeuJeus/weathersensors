const env = require('./env');

function reduceElementsWhilstAssuringKeepLastElement(elements, maxSize) {
//  this is needed for large quantities of elements -> in order to keep latest timestamp for big live view
  let lastElement = elements[elements.length - 1];
  let reducedElements = reduceElementsToMaxSize(elements, maxSize);
  reducedElements[reducedElements.length - 1] = lastElement;
  return reducedElements;
}

function reduceElementsToMaxSize(elements, maxSize) {
  if (elements.length <= maxSize) return elements;
  const origSize = elements.length;
  return Array.from({length: maxSize}, (_, i) =>
    elements[Math.floor(i * (origSize + Math.floor(origSize / maxSize)) / maxSize)]);
}

function filterTimeRangeByPresentParameters(sensorData, query) {
  let startTime = query.timerange_start ? query.timerange_start : 0;
  let endTime = query.timerange_end ? query.timerange_end : Date.now();
  return filterTimeRange(sensorData, startTime, endTime);
}

function filterTimeRange(elements, startTimeStamp, endTimestamp) {
  return elements.filter(function(dataEntry) {
    return dataEntry.TIMESTAMP >= startTimeStamp &&
      dataEntry.TIMESTAMP <= endTimestamp;
  });
}

function checkIfSensorInactive(timestamp) {
  const timeSecondsNow = Date.now();
  return (timeSecondsNow - (timestamp)) > env.INACTIVITY_THRESHOLD_MILLIS;
}

function checkIfAlertAlreadySent(sensor) {
  return sensor.INACTIVITY_NOTIFICATION_SENT === 1;
}

module.exports = {
  reduceElementsToMaxSize,
  filterTimeRange,
  filterTimeRangeByPresentParameters,
  reduceElementsWhilstAssuringKeepLastElement,
  checkIfSensorInactive,
  checkIfAlertAlreadySent,
};
