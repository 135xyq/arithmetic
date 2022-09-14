/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let temp = 1;
    for (let i = 0; i <= Math.sqrt(n); i++){
        if(temp === Math.abs(n)){
            return true;
        }
        temp *= 3;
    }
    return false;
};

console.log(isPowerOfThree(45));
