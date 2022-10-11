/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	let count = 0;
	let arr1 = [];
	let arr2 = [];
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			count++;
			arr1.push(s1[i]);
			arr2.push(s2[i]);
		}
	}
	if (count === 2) {
		if (arr1[0] === arr2[1] && arr1[1] === arr2[0]) {
			return true;
		} else {
			return false;
		}
	} else if (count === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(areAlmostEqual((s1 = "bank"), (s2 = "kanb")));
