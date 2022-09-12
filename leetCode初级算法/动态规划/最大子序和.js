/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {;
	let sum = 0;
	let max = -10000;
	for (var i = 0; i < nums.length; i++) {
		if (sum < 0) {
			sum = nums[i];
		}else{
            sum += nums[i];
        }
		if (sum > max) {
			max = sum;
		}
	}
	return max;
};

console.log(maxSubArray((nums = [-1])));
