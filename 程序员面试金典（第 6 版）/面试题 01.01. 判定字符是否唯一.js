/**https://leetcode.cn/problems/is-unique-lcci/
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    const set = new Set(astr)
    return set.size === astr.length;
};

console.log(isUnique("leetcode"))