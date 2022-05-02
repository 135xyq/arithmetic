/**https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Number.MAX_VALUE;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < 0) {
            sum = 0;
        }
        if (max < sum && sum > 0) {
            max = sum;
        }
        if (max < nums[i]) {
            max = nums[i]
        }
    }
    return max;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0,
        max = nums[0];
    nums.forEach(item => {
        pre = Math.max(pre + item, item);
        max = Math.max(pre, max)
    })
    return max
};

console.log(maxSubArray(nums = [-1]))