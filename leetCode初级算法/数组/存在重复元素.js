/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	return new Set(nums).size !== nums.length;
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	nums.sort((a, b) => a - b);
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			return true;
		}
	}
	return false;
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			return true;
		} else {
			map.set(num,1)
		}
	}
    return false;
};

console.log(containsDuplicate((nums = [1, 2, 3, 4])));
