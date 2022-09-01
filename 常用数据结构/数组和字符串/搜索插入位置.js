/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length -1;
	while (left <= right) {
		middle = Math.floor((left + right) / 2);
		if (nums[middle] > target) {
			right = middle - 1;
		} else if (nums[middle] < target) {
			left = middle + 1;
		} else {
			return middle;
		}
        // console.log(left,right,middle)
	}
	return left;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
	for(let i= 0 ; i<nums.length;i++){
        if(target <= nums[i]){
            return i;
        }
    }
    return nums.length;
};

console.log(searchInsert([1,3],2));
