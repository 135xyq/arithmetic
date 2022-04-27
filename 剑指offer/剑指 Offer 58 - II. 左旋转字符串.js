/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    const str = s.slice(0, n);
    const result = s.slice(n).concat(str);
    return result;
};

reverseLeftWords(s = "abcdefg", k = 2)