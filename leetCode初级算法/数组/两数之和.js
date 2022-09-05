/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2jrse/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2jrse/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	nums = nums.map((item, index) => {
		return {
			index,
			value: item,
		};
	});
	nums.sort((a, b) => a.value - b.value);
	// console.log(nums)
	let left = 0,
		right = nums.length - 1;
	while (left < right) {
		let sum = nums[left].value + nums[right].value;
		// console.log(sum, left, right, nums[left], nums[right]);
		if (sum === target) {
			return [nums[left].index, nums[right].index];
		} else if (sum > target) {
			right--;
		} else {
			left++;
		}
	}
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2jrse/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const length = nums.length;
	let left = 0,
		right = 1;
	while (nums[left] + nums[right] !== target) {
		if (right === length - 1) {
			left++;
			right = left;
		}
		right++;
	}
	return [left, right];
};


/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2jrse/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
        let temp =target-nums[i];
        let index = nums.indexOf(temp,i+1);
        if(index!==-1){
            return [i,index]
        }
    }
};

console.log(twoSum((nums = [3, 2, 4]), (target = 6)));
