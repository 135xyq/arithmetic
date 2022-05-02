/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    for (let j = 1; j < m; j++) {
        grid[j][0] += grid[j - 1][0]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j])
        }
    }

    console.log(grid)

    return grid[m - 1][n - 1];
};

console.log(maxValue([
    [1, 4, 8, 6, 2, 2, 1, 7],
    [4, 7, 3, 1, 4, 5, 5, 1],
    [8, 8, 2, 1, 1, 8, 0, 1],
    [8, 9, 2, 9, 8, 0, 8, 9],
    [5, 7, 5, 7, 1, 8, 5, 5],
    [7, 0, 9, 4, 5, 6, 5, 6],
    [4, 9, 9, 7, 9, 1, 9, 0]
]))