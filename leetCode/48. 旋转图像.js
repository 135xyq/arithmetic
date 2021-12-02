/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	// 矩阵的宽度
	const length =  matrix.length;
	const temp = (new Array(length).fill(0)).map(item=>new Array(length));
	for(let i = 0;i<length;i++){
		for(let j = 0;j<length;j++){
			temp[j][length-i-1] = matrix[i][j];
		}
	}
	for(let i = 0;i<length;i++){
		for(let j = 0;j<length;j++){
			matrix[i][j] = temp[i][j]
		}
	}
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	// 矩阵的宽度
	const length =  matrix.length;
	for(let i = 0;i<Math.floor(length/2);i++){
		for(let j = 0;j<Math.floor((length+1)/2);j++){
			let temp = matrix[i][j];
			matrix[i][j] = matrix[length-1-j][i];
			matrix[length-1-j][i] = matrix[length-1-i][length-1-j];
			matrix[length-1-i][length-1-j] = matrix[j][length-1-i];
			matrix[j][length-1-i] = temp;
		}
	}
};

console.log(rotate(matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))