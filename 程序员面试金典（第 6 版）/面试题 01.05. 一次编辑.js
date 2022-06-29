/**https://leetcode.cn/problems/one-away-lcci/
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
	const length1 = first.length;
	const length2 = second.length;
	if (Math.abs(length1 - length2) > 1) {
		return false;
	}
	let arr1 = first.split("");
	let arr2 = second.split("");
	if (length1 === length2) {
		let count = 0;
		for (let i = 0; i < length1; i++) {
			// console.log(arr1[i], arr2[i]);
			if (arr1[i] !== arr2[i]) {
				count++;
			}
		}
		return count <= 1;
	} else {
		if (length1 > length2) {
			let count = 0;
			let flag = false;
			let j = 0;
			for (let i = 0; i < length1; i++, j++) {
				if (arr1[i] !== arr2[j]) {
					if (!flag) {
						j--;
						flag = true;
					} else {
						return false;
					}
				}
			}
			return true;
		}else{
            let count = 0;
			let flag = false;
			let j = 0;
			for (let i = 0; i < length2; i++, j++) {
				if (arr2[i] !== arr1[j]) {
					if (!flag) {
						j--;
						flag = true;
					} else {
						return false;
					}
				}
			}
			return true;
        }
	}
};

console.log(oneEditAway("sea","ate"));
