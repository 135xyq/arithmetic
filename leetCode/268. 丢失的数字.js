/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
    }
    for (let i = 0; i <= nums.length; i++) {
        sum2 += i;
    }
    return sum2 - sum1;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))