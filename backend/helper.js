// *** helper / utility  functions *** //

const INITIAL_MAX_SENSOR_DATA_ELEMENTS = 20;

// :-)))
function reduceElementsToMaxSize(elements, originalElements, maxSize, iterator){
    if (maxSize === 0) return [];
    else if(maxSize === 1) return [originalElements[0]];
    let returnData = Array.from(elements);
    if (returnData.length > maxSize && iterator < 10){
        let delta = returnData.length - maxSize;
        let steps = returnData.length / delta;
        let step = 1;
        for(let i = 0; i <= returnData.length; i++){
            if (step >= steps){
                returnData.splice(i, 1);
                i -= 1;
                step = step - steps + 1;
            }else{
                step++;
            }
        }
        return reduceElementsToMaxSize(returnData, originalElements, maxSize, ++iterator);
    }
    returnData[0] = originalElements[0];
    returnData[returnData.length -1 ] = originalElements[originalElements.length-1];
    return returnData;
}


module.exports = {
    'reduceElementsToMaxSize' : reduceElementsToMaxSize,
    'INITIAL_MAX_SENSOR_DATA_ELEMENTS' : INITIAL_MAX_SENSOR_DATA_ELEMENTS
};
