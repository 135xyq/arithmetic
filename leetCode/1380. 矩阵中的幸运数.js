/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
	const m = matrix.length;
	const n = matrix[0].length;
	let result = [];
	let min = [];
	let max = [];
	for(let i = 0; i < m;i++) {
		min.push(Math.min(...matrix[i])); //一行的最小值	
	}
	
	for(let j = 0; j < n; j++) {
		let temp  = 0;
		for(let i = 0; i < m; i++) {
			if(matrix[i][j] > temp){
				temp = matrix[i][j];
			}
		}
		max.push(temp);
	}
	for(let i = 0; i < m; i++) {
		for(let j =0; j < n; j++){
			if(min.indexOf(matrix[i][j]) !== -1 && max.indexOf(matrix[i][j]) !==-1) {
				result.push(matrix[i][j]);
			}
		}
	}
	return result;
};

console.log(luckyNumbers(matrix = [[3,7,8],[9,11,13],[15,16,17]]))