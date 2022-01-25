/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
	let count = 0;
	while(n > 1){
		let temp = Math.floor(n / 2);
		count += temp;
		n = Math.ceil(n / 2);
	}
	return count ;
};

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
	return n - 1;
};


console.log(numberOfMatches(1))