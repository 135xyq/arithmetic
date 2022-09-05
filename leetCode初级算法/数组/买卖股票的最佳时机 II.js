/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    for(let i = 1 ;i < prices.length;i++){
        if(prices[i] > prices[i-1]){
            max = max + (prices[i]-prices[i-1])
        }
    }
    return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    let dep0 = 0,dep1 =-prices[0];
    for(let i= 1;i < prices.length;i++){
        let newDep0 = Math.max(dep0,dep1+prices[i]);
        let newDep1 = Math.max(dep1,dep0-prices[i]);
        dep0=newDep0;
        dep1 = newDep1;
    }
    return dep0;
};

console.log(maxProfit((prices = [7, 1, 5, 3, 6, 4])));
