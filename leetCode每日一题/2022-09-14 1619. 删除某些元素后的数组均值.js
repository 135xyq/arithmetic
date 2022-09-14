/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    let length = arr.length;
    let result = 0;
    for (let i = length / 20; i < length / 20 * 19; i++){
        result+= arr[i];
    }
    return result / length *20 / 18;

};

console.log(trimMean(arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]))