/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let num = new Array(m);

    for (let i = 0; i < m; i++) {
        num[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            num[i][j] = 0;
        }
    }
    ops.map(item => {
        for (let i = 0; i < item[0]; i++) {
            for (let j = 0; j < item[1]; j++) {
                num[i][j]++;
            }
        }
    })
    let maxNum = 0;
    let result = 0;
    num.map(item => {
        maxNum = Math.max(Math.max(...item), maxNum);
    })
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (num[i][j] == maxNum) {
                result++;
            }
        }
    }
    return result;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function(m, n, ops) {
    let res1 = m;
    let res2 = n;
    for (const op of ops) {
        res1 = Math.min(res1, op[0]);
        res2 = Math.min(res2, op[1]);
    }
    return res1 * res2;
}

console.log(maxCount(3,
    3, [
        [2, 2],
        [3, 3]
    ]))