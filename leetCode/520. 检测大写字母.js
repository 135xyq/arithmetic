/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const length = word.length;
    let upper = 0; //计算有多少个大写字母
    let lower = 0; //有多少小写字母
    for (let i = 0; i < length; i++) {
        if (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z') {
            upper++;
        } else {
            lower++;
        }
    }
    if (lower === 0 || upper === 0) {
        return true;
    } else if (upper === 1 && (word.charAt(0) >= 'A' && word.charAt(0) <= 'Z')) {
        return true;
    } else {
        return false;
    }
};
console.log(detectCapitalUse(word = "jurtj2"))