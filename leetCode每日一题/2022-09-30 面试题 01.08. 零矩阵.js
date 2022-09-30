/**https://leetcode.cn/problems/zero-matrix-lcci/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	let arrRow = []; //存放行为0的
	let arrCol = []; //存放列为0的
	const m = matrix.length;
	const n = matrix[0].length;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (!arrCol.includes[j]) {
				if (matrix[i][j] === 0) {
					if(!arrRow.includes(i)){
                        arrRow.push(i);
                    }
					arrCol.push(j);
				}
			}
		}
	}
	for (const item of arrRow) {
		for (let j = 0; j < n; j++) {
			matrix[item][j] = 0;
		}
	}
	for (const item of arrCol) {
		for (let j = 0; j < m; j++) {
			matrix[j][item] = 0;
		}
	}
	return matrix;
};