/**https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('');
};

console.log(minNumber([5, 3, 30, 34, 9]))