/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
	let arr = new Set(s);
	if (arr.size === 1) {
		return true;
	} else {
		let flag = false;
		let count = 0;
		for (let i = 0; i < s.length; i++) {
			if (s[i] === "1") {
				if (!flag) {
					count++;
				}
				flag = true;
				if (count > 1) {
					return false;
				}
			} else {
				flag = false;
			}
		}
		return true;
	}
};

var checkOnesSegment = function(s) {
    return s.indexOf('01') === -1;
};

console.log(checkOnesSegment((s = "1001")));

