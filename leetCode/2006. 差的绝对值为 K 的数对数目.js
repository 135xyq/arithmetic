/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
	let count = 0;
	const length = nums.length;
	for(let i = 0; i < length; i++) {
		for(let j = i+1; j < length; j++){
			if(Math.abs(nums[i] - nums[j]) === k){
				count++;
			}
		}
	}
	return count;
};

console.log(countKDifference(nums = [1,2,2], k = 1))