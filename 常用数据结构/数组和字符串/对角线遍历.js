/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
	let a = [];
	let rowLength = mat.length - 1;
	let colLength = mat[0].length - 1;
	let k = 0,
		l = 0;
	for (let i = 0; i <= rowLength + colLength; i++) {
		if (i % 2 === 0) {
			for (let j = k; j >= i - l; j--) {
				a.push(mat[j][i - j]);
			}
		} else {
			for (let j = l; j >= i - k; j--) {
				a.push(mat[i - j][j]);
			}
		}
		k = k >= rowLength ? rowLength : k + 1;
		l = l >= colLength ? colLength : l + 1;
	}
	return a;
};

console.log(
	findDiagonalOrder(
		(mat = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])
	)
);
