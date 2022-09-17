/**https://leetcode.cn/problems/largest-substring-between-two-equal-characters/
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	let max = -1;
	let left = 0;
	let right = s.length - 1;
	for (let i = 0; i < s.length; i++) {
		left = i;
		right = s.length - 1;
		while (left < right) {
			if (s[left] === s[right]) {
				let temp = right - left - 1;
				if (temp > max) max = temp;
				break;
			} else {
				right--;
			}
		}
	}
	return max;
};

console.log(maxLengthBetweenEqualCharacters((s = "cabbac")));
