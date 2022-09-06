/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnoilh/
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let result = "";
	s = s.trim();
	if (s[0] === "-") {
		// 负数
		for (let i = 1; i < s.length; i++) {
			let item = s[i];
			if (item >= "0" && item <= "9") {
				result += item;
			} else {
				return -result;
			}
			if (result > Math.pow(2, 31)) {
				return -Math.pow(2, 31);
			}
		}
		return -result;
	} else if (s[0] === "+") {
		for (let i = 1; i < s.length; i++) {
			let item = s[i];
			if (item >= "0" && item <= "9") {
				result += item;
			} else {
				return Number(result);
			}
			if (result > Math.pow(2, 31)-1) {
				return Math.pow(2, 31)-1;
			}
		}
		return Number(result);
	} else {
		for (let i = 0; i < s.length; i++) {
			let item = s[i];
			if (item >= "0" && item <= "9") {
				result += item;
			} else {
				return Number(result);
			}
			if (result > Math.pow(2, 31)-1) {
				return Math.pow(2, 31)-1;
			}
		}
		return Number(result);
	}
};

console.log(myAtoi((s = "+1")));
