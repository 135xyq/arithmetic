/**https://leetcode.cn/problems/minimum-absolute-difference/
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b);
	let min = Infinity;
	let result = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (Math.abs(arr[i+1] - arr[i]) < min) {
			result = [];
			result.push([arr[i], arr[i+1]]);
			min = Math.abs(arr[i+1] - arr[i]);
		} else if (Math.abs(arr[i+1] - arr[i]) === min) {
			result.push([arr[i], arr[i+1]]);
		}
	}
	return result;
};

console.log(minimumAbsDifference((arr = [3, 8, -10, 23, 19, -4, -14, 27])));
