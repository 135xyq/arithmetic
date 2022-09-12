/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let result = 0;
    let cur = 0;
    for(let i = 1; i < prices.length; i++) {
        cur = Math.max(cur,0) + prices[i]-prices[i-1]
        result = Math.max(result,cur);
    }
    return result;
};

console.log(maxProfit([7,1,5,3,6,4]))