/**https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let str = num.toString();
    let p = 0,
        q = 0,
        r = 1;
    for (let i = 0; i < str.length; i++) {
        p = q;
        q = r;
        if (i !== 0) {
            let temp = str.slice(i - 1, i + 1);
            if (parseInt(temp) <= 25 && parseInt(temp) >= 10) {
                r += p;
            }
        }
    }
    return r;
};

console.log(translateNum(12258))