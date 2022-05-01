/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    const length = prices.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            max = (prices[j] - prices[i]) > max ? (prices[j] - prices[i]) : max;
        }
    }
    return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let max = 0;
    for (const price of prices) {
        max = Math.max(price - min, max);
        min = Math.min(price, min);
    }
    return max;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))