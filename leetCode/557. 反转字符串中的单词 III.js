/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' '); //将字符串转为数组
    let result = arr.map(item => item.split('').reverse().join(''))
    return result.join(' ')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const length = s.length;
    let result = [];
    let sum = 0; //一个单词的长度
    // 要多处理一个判断长度
    for (let i = 0; i <= length; i++) {
        // 如果不等于空格则说明是一个单词，统一处理
        if (s[i] !== ' ' && i !== length) {
            sum++;
        } else {
            // 将一个单词翻转
            let temp = [];
            for (let j = sum - 1; j >= 0; j--) {
                temp.push(s[i - sum + j]);
            }
            sum = 0;
            result.push(temp.join(''));
            if (i !== length) {
                result.push(' ')
            }
        }
    }
    return result.join('');
};

console.log(reverseWords("Let's take LeetCode contest"))