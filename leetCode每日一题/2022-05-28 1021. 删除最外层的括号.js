/**https://leetcode.cn/problems/remove-outermost-parentheses/
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
	const length = s.length;
	let list = [];
	let result = "";
	for (let i = 0; i < length; i++) {
		if (s[i] === ")") {
			list.pop();
		}
		if (list.length) {
			result += s[i];
		}
		if (s[i] === "(") {
			list.push("(");
		}
		// console.log(list, result);
	}
	return result;
};

console.log(removeOuterParentheses((s = "(()())(())")));
