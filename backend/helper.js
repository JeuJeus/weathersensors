// *** helper / utility  functions *** //

const INITIAL_MAX_SENSOR_DATA_ELEMENTS = 20;

function reduceElementsToMaxSize(elements, maxSize){
    if (elements.length <= maxSize) return elements;
    let orig_size = elements.length;
    return Array.from({length: maxSize}, (_, i) =>
        elements[Math.floor(i * (orig_size + Math.floor(orig_size/maxSize))/maxSize)]);
}

module.exports = {
    'reduceElementsToMaxSize' : reduceElementsToMaxSize,
    'INITIAL_MAX_SENSOR_DATA_ELEMENTS' : INITIAL_MAX_SENSOR_DATA_ELEMENTS
};
