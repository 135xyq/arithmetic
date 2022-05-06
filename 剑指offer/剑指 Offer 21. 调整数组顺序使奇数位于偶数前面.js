/**https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let arr = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & 1 === 1) {
            arr.unshift(nums[i])
        } else {
            arr.push(nums[i])
        }
    }
    return arr;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        while ((nums[left] & 1) === 1 && left < right) {
            left++;
        }
        while ((nums[right] & 1) === 0 && left < right) {
            right--;
        }
        let temp = nums[left];
        nums[left] = nums[right]
        nums[right] = temp;
    }

    return nums;
};

console.log(exchange(nums = [1, 2, 3, 4]))