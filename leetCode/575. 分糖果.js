/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const length = candyType.length;
    const n = length / 2; //能吃的个数
    let candies = [];
    let i, j;
    for (i = 0; i < length; i++) {
        for (j = 0; j < candies.length; j++) {
            if (candies[j] === candyType[i]) {
                break;
            }
        }
        if (j === candies.length) {
            candies.push(candyType[i]);
        }
    }
    const typeNumber = candies.length;
    // 如果剩余的总数少于能吃的数，则返回少的
    if (typeNumber < n) {
        return typeNumber;
    } else {
        return n;
    }

};


var distributeCandies = function(candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
}

console.log(distributeCandies([6, 6, 6, 6]))