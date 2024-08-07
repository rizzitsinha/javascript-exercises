const removeFromArray = function(array, ...numbers) {
    let inputArray = array;
    for(const num of numbers){
        let i = 0;
        for(const integer of inputArray){
            if(integer === num){
                inputArray.splice(i, 1);
                i--;
                numbers.push(num)
            }
            i++;
        }
    }
    return inputArray;
}
// Do not edit below this line
module.exports = removeFromArray;
