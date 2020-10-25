// *** helper / utility  functions *** //

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

module.exports = {
  'reduceElementsToMaxSize': reduceElementsToMaxSize,
  'filterTimeRange': filterTimeRange,
  'filterTimeRangeByPresentParameters': filterTimeRangeByPresentParameters,
};
