/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (let i = 0; i <= x; i++) {
        // console.log(i)
        if (i * i <= x && ((i + 1) * (i + 1) > x)) {
            return i;
        }
    }
};


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    const n = Math.pow((Math.E), (Math.log(x) / 2));
    if ((Math.floor(n) + 1) * (Math.floor(n) + 1) <= x) {
        return Math.floor(n) + 1;
    }
    return Math.floor(n);
};