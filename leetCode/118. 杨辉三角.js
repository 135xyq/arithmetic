/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for (let i = 1; i <= numRows; i++) {
        let temp = [1];
        for (let j = 1; j < i - 1; j++) {
            temp.push(result[i - 2][j - 1] + result[i - 2][j]);
        }
        if (i !== 1) {
            temp.push(1);
        }
        result.push(temp);
    }
    return result;
};

console.log(generate(numRows = 5));