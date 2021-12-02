/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    // 如果两个字符串长度不相等或者其中一个长度为1，则肯定不是亲密字符串
    if (s.length !== goal.length || s.length === 1) {
        return false;
    }
    let temp = []; //用来存放两个字符串的每一项的差值
    for (let i = 0; i < s.length; i++) {
        temp.push(s.charCodeAt(i) - goal.charCodeAt(i));
    }
    let a = -1;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== 0 && a === -1) {
            a = i;
        } else if (temp[i] !== 0 && a !== -1) {
            if (goal.charAt(a) !== s.charAt(i)) {
                return false;
            }
        }
    }
    temp = temp.filter(item => item);
    if (((temp.length === 2) && (temp[0] + temp[1] === 0)) || (temp.length === 0 && ((new Set(s.split('')).size === 1) || (new Set(s.split('')).size !== s.length)))) {
        return true;
    } else {
        return false;
    }
};

console.log(buddyStrings("ab", "ba"))