/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	for(let i = 0;i<nums.length;i++){
		for(let j = i+1;j<=i+k;j++){
			if(nums[i] === nums[j]){
				return true;
			}
		}
	}
	return false;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	const set = new Set();
	const length = nums.length;
	for(let i = 0;i<length;i++){
		if(i > k){
			set.delete(nums[i-k-1])
		}
		if(set.has(nums[i])){
			return true;
		}
		set.add(nums[i])
	}
	return false;
};


console.log(containsNearbyDuplicate(nums = [1,2,3,1,2,3], k = 2))