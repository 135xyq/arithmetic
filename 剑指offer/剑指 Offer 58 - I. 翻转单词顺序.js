/**https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reg = /\s+/;
    const arr = s.trim().split(reg); //去除开头和结尾多余空格，并且将字符串拆分为数组
    return arr.reverse().join(' ')
};



console.log(reverseWords("  the      sky is blue"))