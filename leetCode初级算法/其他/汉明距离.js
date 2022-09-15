/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let temp = x ^ y;
    let result = 0;
    while (temp){
        if(temp % 2 == 1) result++;
        temp = Math.floor(temp / 2)
    }
    return result;
};

console.log(hammingDistance(1,4))