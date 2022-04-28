/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    const length = nums.length;
    let flag = false;
    for (let i = 0; i < length; i++) {
        if (nums[i] === target) {
            count++;
            flag = true;
        } else if (nums[i] !== target && flag) {
            return count;
        }
    }
    return count;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    let left = 0;
    let index = 0;
    let right = nums.length - 1;
    while (left < right) {
        let middle = Math.floor(left + right);
        if (nums[middle] === target) {
            index = middle;
            break;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        }
    }
    for (let i = index; i < nums.length; i++) {
        if (nums[i] === target) {
            count++;
        } else {
            break;
        }
    }
    for (let i = index - 1; i >= 0; i--) {
        if (nums[i] === target) {
            count++;
        } else {
            break;
        }
    }
    return count;
};



console.log(search(nums = [5, 7, 7, 8, 8, 10], target = 8))