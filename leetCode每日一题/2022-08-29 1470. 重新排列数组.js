/**https://leetcode.cn/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let count = 0;
	for (let i = 1; i < nums.length; i += 2) {
		nums.splice(i, 0, nums[n + count]);
		count++;
		nums.splice(n + count, 1);
	}
	return nums;
};

/**https://leetcode.cn/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	const res = new Array(2 * n).fill(0);
	for (let i = 0; i < n; i++) {
		res[2 * i] = nums[i];
		res[2 * i + 1] = nums[n + i];
	}
	return res;
};

console.log(shuffle((nums = [2, 5, 1, 3, 4, 7]), (n = 3)));
