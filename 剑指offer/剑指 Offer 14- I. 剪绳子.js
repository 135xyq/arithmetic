/**https://leetcode.cn/problems/jian-sheng-zi-lcof/
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	if (n <= 3) {
		return n - 1;
	}else{
        const num1 = Math.floor(n / 3);
        const num2 = n  % 3;
        if(num2 === 0) {
            return 3**num1;
        }else if(num2 === 1) {
            return 3**(num1-1) * 4;
        }else{
            return (3 ** num1) * 2
        }
    }
};


console.log(cuttingRope(10));
