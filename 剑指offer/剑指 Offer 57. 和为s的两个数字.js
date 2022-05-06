/**https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else if (nums[left] + nums[right] === target) {
            return [nums[left], nums[right]];
        } else {
            left++;
        }
    }
    return [];

};


/**https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const set = new Set(nums);
    for (const item of set) {
        if (set.has(target - item)) {
            return [item, target - item]
        }
    }

};

console.log(twoSum(nums = [10, 26, 30, 31, 47, 60], target = 40))