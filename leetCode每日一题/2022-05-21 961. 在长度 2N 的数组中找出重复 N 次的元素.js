/**https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
	nums.sort((a, b) => a - b);
	const middle = nums.length / 2;
	if (nums[middle] !== nums[middle - 1]) {
		if (nums[middle] === nums[nums.length - 1]) {
			return nums[middle];
		} else {
			return nums[middle - 1];
		}
	} else {
		return nums[middle];
	}
};

/**https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
	const map = new Map();
    for (const item of nums) {
        if(map.has(item)){
            return item;
        }else{
            map.set(item,1)
        }
    }
};
console.log(repeatedNTimes((nums = [5, 1, 5, 2, 5, 3, 5, 4])));
