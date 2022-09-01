/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
	let result = new Array(prices.length);
	for (let i = 0; i < prices.length; i++) {
		let price = 0;
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] <= prices[i]) {
				price = prices[j];
				break;
			}
		}
            result[i]=(prices[i] - price);
	}
    return result;
};

console.log(finalPrices((prices = [8, 4, 6, 2, 3])));
