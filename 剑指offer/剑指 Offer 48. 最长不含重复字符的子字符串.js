/**https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    const length = s.length;
    let array = [];
    for (let i = 0; i < length; i++) {
        const index = array.indexOf(s[i]);
        if (index !== -1) {
            array.splice(0, index + 1);
        }
        array.push(s[i])
        if (array.length > maxLength) {
            maxLength = array.length;
        }
    }
    return maxLength;

};

console.log(lengthOfLongestSubstring("abcabcb435435b"))