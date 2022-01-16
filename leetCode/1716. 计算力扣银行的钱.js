/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
	const weeks = Math.floor(n / 7);
	const days = n % 7;
	let result = 0;
	// 整数个星期的钱
	result += 28 * weeks;
	for(let i =1 ;i<weeks;i++){
		result += 7 * i;
	}
	// 不足一个星期的钱
	for(let i = 1 ;i<=days;i++){
		result += weeks + i;
	}
	return result
};

console.log(totalMoney(26))