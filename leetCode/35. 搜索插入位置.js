/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            if (mid != 0) {
                right = mid - 1;
            } else {
                return 0;
            }
        } else if (nums[mid] < target) {
            if (nums[mid + 1] > target) {
                return mid + 1;
            } else {
                if (mid != nums.length - 1) {
                    left = mid + 1;
                } else {
                    return nums.length;
                }
            }
        } else {
            return mid;
        }
    }
};

console.log(searchInsert(nums = [1, 3, 5, 6], target = 2))