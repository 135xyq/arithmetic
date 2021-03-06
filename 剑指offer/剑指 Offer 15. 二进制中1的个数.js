/**https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) != 0) {
            count++;
        }
    }
    return count;
};



console.log(hammingWeight(11111111111111111111111111111101))