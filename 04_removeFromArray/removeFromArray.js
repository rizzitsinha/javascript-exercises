const removeFromArray = function(array, ...numbers) {
    let inputArray = array;
    let removeNumArray = [];
    for(const num of numbers){
        let i = 0;
        for(const integer of inputArray){
            if(integer === num){
                removeNumArray.push(i);
            }
            i++;
        }
    }
    for(const j of removeNumArray){
        inputArray.splice(j, 1);
    }
    return inputArray;
}
// Do not edit below this line
module.exports = removeFromArray;
