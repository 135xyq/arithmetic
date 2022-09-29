/**https://leetcode.cn/problems/string-rotation-lcci/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isFlipedString = function (s1, s2) {
	const length1 = s1.length;
	const length2 = s2.length;
	if (length1 !== length2) {
		return false;
	} else if (length1 === 0) {
		return true;
	} else {
		for (let i = 0; i < length1; i++) {
			let flag = true;
			for (let j = 0; j < length1; j++) {
				if (s1[(i + j) % length1] !== s2[j]) {
					flag = false;
					break;
				}
			}
			if (flag) {
				return true;
			}
		}
		return false;
	}
};