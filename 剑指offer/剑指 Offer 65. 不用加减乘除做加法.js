/**https://leetcode.cn/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    while (b != 0) {
        var c = (a ^ b);
        b = ((a & b) << 1);
        a = c;
    }

    return a;
};

console.log(add(1, 1))