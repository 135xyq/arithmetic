/**https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    const m = matrix.length;
    if (m === 0) {
        return false;
    }
    const n = matrix[0].length;
    let row = 0;
    let col = n - 1;
    while (row < m && col >= 0) {
        if (target > matrix[row][col]) {
            row++;
        } else if (target < matrix[row][col]) {
            col--;
        } else {
            return true;
        }
    }
    return false;
};

console.log(findNumberIn2DArray([], 25))