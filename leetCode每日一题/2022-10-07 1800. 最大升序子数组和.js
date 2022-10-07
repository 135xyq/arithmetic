/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
	let max = nums[0];
	let tempSum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			tempSum += nums[i];
		} else {
			if (tempSum > max) {
				max = tempSum;
			}
			tempSum = nums[i];
		}
	}
    if (tempSum > max) {
        max = tempSum;
    }
	return max;
};

console.log(maxAscendingSum((nums = [10, 20, 30, 5, 10, 50])));
