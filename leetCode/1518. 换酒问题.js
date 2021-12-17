/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
	let count = numBottles;//可以喝多少瓶酒
	let bottles = numBottles;//有多少瓶子
	while (bottles >= numExchange){
		let temp = Math.floor(bottles / numExchange);//当前的瓶子可以换多少瓶酒
		bottles = temp + (bottles - temp * numExchange);
		count += temp;
	}
	return count;
};

console.log(numWaterBottles(5,5));