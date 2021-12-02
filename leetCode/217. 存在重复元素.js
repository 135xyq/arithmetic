/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    let sum1 = 0,
        sum2 = 0;
    if (set.size === nums.length) {
        return false;
    } else {
        return true;
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b); //将数组排序
    // 如果数组中存在重复元素，则排序后应该相邻
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}


console.log(containsDuplicate([2, 1, 2, 4]))