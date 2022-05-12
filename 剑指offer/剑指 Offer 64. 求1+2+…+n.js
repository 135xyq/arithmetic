/**https://leetcode.cn/problems/qiu-12n-lcof/
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    if (n === 1) {
        return 1;
    }
    return sumNums(n - 1) + n;
};


/**https://leetcode.cn/problems/qiu-12n-lcof/
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    n && (n += sumNums(n - 1))
    return n;
};

console.log(sumNums(3))