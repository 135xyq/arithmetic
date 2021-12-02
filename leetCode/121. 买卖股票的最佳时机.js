/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (i = 0; i < prices.length - 1; i++) {
        let temp = prices.slice(i + 1);
        maxProfit = Math.max((Math.max(...temp) - prices[i]), maxProfit);
    }
    return maxProfit;
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
};

console.log(maxProfit([2, 4, 1]));