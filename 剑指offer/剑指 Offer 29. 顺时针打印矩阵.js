/**https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const rows = matrix.length;
	const cols = matrix.length > 0 ? matrix[0].length : 0;
	let result = [];
	let col = 0;
	let row = 0;
	for (let i = 0; i <= rows - row; i++) {
		for (let j = i; j < cols - Math.ceil(col / 2) && i <= rows - row; j++) {
			console.log(1, matrix[i][j]);
			result.push(matrix[i][j]);
		}
		row++;
		for (let j = i + 1; j <= rows - row && i <= rows - row; j++) {
			console.log(2, matrix[j][cols - row]);
			result.push(matrix[j][cols - row]);
		}
		col++;
		for (
			let j = cols - Math.ceil(col / 2) - 1;
			j >= i && i <= rows - row;
			j--
		) {
			console.log(3, matrix[rows - Math.ceil(row / 2)][j]);
			result.push(matrix[rows - Math.ceil(row / 2)][j]);
		}
		row++;
		for (let j = rows - row; j > i && i <= rows - row; j--) {
			console.log(4, matrix[j][i]);
			result.push(matrix[j][i]);
		}
		col++;
	}
	return result;
};

var spiralOrder = function (matrix) {
	if (!matrix.length || !matrix[0].length) {
		return [];
	}
	const rows = matrix.length,
		columns = matrix[0].length;
	const visited = new Array(rows)
		.fill(0)
		.map(() => new Array(columns).fill(false));
	const total = rows * columns;
	const order = new Array(total).fill(0);

	let directionIndex = 0,
		row = 0,
		column = 0;
	const directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	for (let i = 0; i < total; i++) {
		order[i] = matrix[row][column];
		visited[row][column] = true;
		const nextRow = row + directions[directionIndex][0],
			nextColumn = column + directions[directionIndex][1];
		if (
			!(
				0 <= nextRow &&
				nextRow < rows &&
				0 <= nextColumn &&
				nextColumn < columns &&
				!visited[nextRow][nextColumn]
			)
		) {
			directionIndex = (directionIndex + 1) % 4;
		}
		row += directions[directionIndex][0];
		column += directions[directionIndex][1];
	}
	return order;
};

console.log(
	spiralOrder(
		(matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])
	)
);
console.log(spiralOrder((matrix = [[2, 3]])));
console.log(spiralOrder((matrix = [[7], [9], [6]])));
