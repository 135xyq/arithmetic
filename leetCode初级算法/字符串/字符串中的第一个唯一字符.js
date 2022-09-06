/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn5z8r/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const map = new Map();
	for (const item of s) {
		if (map.has(item)) {
			map.set(item, map.get(item) + 1);
		} else {
			map.set(item, 1);
		}
	}

	for (let i = 0; i < s.length; i++) {
		const element = s[i];
		if (map.get(element) === 1) {
			return i;
		}
	}
	return -1;
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn5z8r/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let left = 0;
	let right = s.length-1;
	while (right> -1 && left < s.length) {
		if (s[left] === s[right] && left !==right) {
			left++;
			right = s.length - 1;
		}else{
            right--;
        }
	}
    if(left === s.length){
        return -1;
    }else{
        return left
    }
};

console.log(firstUniqChar((s = "lleetcode")));
