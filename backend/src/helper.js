// *** helper / utility  functions *** //

function reduceElementsToMaxSize(elements, maxSize) {
  if (elements.length <= maxSize) return elements;
  const origSize = elements.length;
  return Array.from({length: maxSize}, (_, i) =>
    elements[Math.floor(i * (origSize + Math.floor(origSize/maxSize))/maxSize)]);
}


module.exports = {
  'reduceElementsToMaxSize': reduceElementsToMaxSize,
};
