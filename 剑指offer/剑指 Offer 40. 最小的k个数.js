/**https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    return arr.sort((a, b) => a - b).slice(0, k)
};

console.log(getLeastNumbers(arr = [3, 2, 1], k = 2))