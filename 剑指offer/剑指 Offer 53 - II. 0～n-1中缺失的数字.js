/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let middle = -1;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (middle == nums[middle]) {
            left = middle + 1;
        } else if (middle < nums[middle]) {
            right = middle - 1;
        }
    }
    return left;
};

console.log(missingNumber([0]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const length = nums.length;
    const sum = (length * (length + 1)) / 2;
    let temp = 0;
    for (let i = 0; i < length; i++) {
        temp += nums[i];
    }
    return sum - temp;
};

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))