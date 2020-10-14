// *** helper / utility  functions *** //

// :-)))
function reduceElementsToMaxSize(elements, maxSize, iterator){
    if (maxSize === 0) return [];
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
        return reduceElementsToMaxSize(returnData, maxSize, ++iterator);
    }
    return returnData;
}


module.exports = {
    'reduceElementsToMaxSize' : reduceElementsToMaxSize
};
