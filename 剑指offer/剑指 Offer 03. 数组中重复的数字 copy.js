/**https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const length = nums.length;
    const map = new Map();
    for (let i = 0; i < length; i++) {
        if (map.has(nums[i])) {
            return nums[i];
        } else {
            map.set(nums[i], 1);
        }
    }
};

/** 
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    for (let i = 0; i < length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i]
        }
    }
};


console.log(findRepeatNumber([3, 4, 2, 0, 0, 1]))