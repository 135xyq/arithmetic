/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const array = s.split(/\s+/);

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] != '') {
            return array[i].length;
        }
    }
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const array = s.trim().split(' ');
    return array[array.length - 1].length;
};

console.log(lengthOfLastWord("  fly me   to   the moon  "));