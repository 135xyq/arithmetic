/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	return s.reverse();
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	const length = s.length;
	for (let i = 0; i < Math.floor(length / 2); i++) {
		let temp = s[i];
		s[i] = s[length - 1 - i];
		s[length - 1 - i] = temp;
	}
	// console.log(s)
};

console.log(reverseString((s = ["H", "a", "n", "n", "a", "h"])));
