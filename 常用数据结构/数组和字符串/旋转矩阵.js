/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const length = matrix.length
    let result = new Array(length);
    for(let i = 0; i < length;i++){
        result[i] = new Array(length)
        for(let j =0  ; j <  length;j++){
            result[i][j] = matrix[length - j-1][i]
        }
    }
    for(let i = 0; i < length;i++){
        for(let j =0  ; j <  length;j++){
            matrix[i][j] = result[i][j]
        }
    }
};


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function (matrix) {
    const length = matrix.length
    for(let i = 0; i < Math.floor(length/2);i++){
        for(let j =0  ; j <  Math.floor((length+1)/2);j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[length-1-j][i];
            matrix[length-1-j][i] =  matrix[length-1-i][length-1-j];
            matrix[length-1-i][length-1-j] = matrix[j][length-1-i];
            matrix[j][length-1-i] = temp;
        }
    }

    console.log(matrix)

};
console.log(
	rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
