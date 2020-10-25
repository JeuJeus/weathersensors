// *** helper / utility  functions *** //

function reduceElementsToMaxSize(elements, maxSize) {
  if (elements.length <= maxSize) return elements;
  const origSize = elements.length;
  return Array.from({length: maxSize}, (_, i) =>
    elements[Math.floor(i * (origSize + Math.floor(origSize / maxSize)) / maxSize)]);
}

function filterDateRange(elements, startTimeStamp, endTimestamp) {
  return elements.filter(function(dataEntry) {
    return dataEntry.TIMESTAMP >= startTimeStamp &&
      dataEntry.TIMESTAMP <= endTimestamp;
  });
}

module.exports = {
  'reduceElementsToMaxSize': reduceElementsToMaxSize,
  'filterDateRange': filterDateRange,
};
