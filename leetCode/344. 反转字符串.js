/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    for (let i = 0; i < len; i++) {
        s.splice(i, 0, s.pop());
    }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - i - 1] = temp;
    }
};


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
};

console.log(reverseString(s = ["h", "e", "l", "l", "o"]))