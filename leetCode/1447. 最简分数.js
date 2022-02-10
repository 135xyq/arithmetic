/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
	let arr = [];

	for(let i = 1; i <= n; i++) {
		for(let j = 1; j < i; j++) {
			let temp = null; 
			let m = i;
			let n = j;
			while(temp = m % n){
				m = n;
				n = temp;
			}
			if(n === 1){
				arr.push(`${j}/${i}`)
			}
		}
	}
	return arr;
};

console.log(simplifiedFractions(3))