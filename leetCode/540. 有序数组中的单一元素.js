/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	let left = 0;
	let right = nums.length - 1;
	let mid;
	while(left < right){
		mid = Math.floor((right - left) / 2) + left;
		if(nums[mid] === nums[mid^1]) {
			left = mid +1;
		}else{
			right = mid;
		}
	}
	return nums[left]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	const length = nums.length;
	for(let i =0;i<length;i+=2){
		if(nums[i] !== nums[i+1]){
			return nums[i]
		}
	}
};
console.log(singleNonDuplicate([1,1,2]))