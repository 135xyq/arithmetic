/**https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof/
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    let num = 1;
    let flag = 0; //有0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            flag++;
        } else {
            num *= a[i];
        }
    }
    if (flag >= 2) {
        return new Array(a.length).fill(0);
    } else if (flag === 1) {
        let result = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] === 0) {
                result.push(num)
            } else {
                result.push(0)
            }
        }
        return result
    } else {
        let result = [];
        for (let i = 0; i < a.length; i++) {
            result.push(num / a[i])
        }
        return result
    }
};

console.log(constructArr([1, 2, 0, 4, 5]))