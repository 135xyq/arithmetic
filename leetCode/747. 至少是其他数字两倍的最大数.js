/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
	const max = Math.max(...nums);
	const index = nums.indexOf(max);
	nums.splice(index,1);
	const secondMax = Math.max(...nums);
	if(max >= 2 * secondMax){
		return index;
	}
	return -1;
};

console.log(dominantIndex([3]))