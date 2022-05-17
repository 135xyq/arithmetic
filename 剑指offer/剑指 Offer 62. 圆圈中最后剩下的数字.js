/**https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
	let deleteIndex = 0;
	let arr = new Array(n);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = i;
	}
	while (arr.length > 1) {
		deleteIndex = (deleteIndex + m - 1) % arr.length;
		arr.splice(deleteIndex, 1);
	}
	return arr[0];
};

/**https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * 题解 https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/javajie-jue-yue-se-fu-huan-wen-ti-gao-su-ni-wei-sh/
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
	let result = 0;
    for(let i = 2 ;i <= n;i ++) {
        result = (result + m) % i;
    }
    return result
};

console.log(lastRemaining(82002, 120659));
