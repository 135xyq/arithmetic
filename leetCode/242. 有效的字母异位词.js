/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 如果两个字符串长度不一样则不可能满足条件
    if (s.length !== t.length) {
        return false;
    }
    // 将字符串转为数组
    const arr1 = Array.from(s);
    const arr2 = Array.from(t);
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};