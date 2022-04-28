/**https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for (const item of s) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)
        } else {
            map.set(item, 1)
        }
    }
    for (const [item, value] of map) {
        if (value === 1) {
            return item;
        }
    }
    return ' ';
};

console.log(firstUniqChar(s = "abaccdeff"))