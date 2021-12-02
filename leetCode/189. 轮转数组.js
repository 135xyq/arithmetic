/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let length = nums.length;
    let k1 = k % length;
    nums.unshift(...nums.splice(length - k1))
    return nums
};

console.log(rotate(nums = [1, 2, 3, 4, 5, 6, 7], k = 3))