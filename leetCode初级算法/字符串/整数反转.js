/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnx13t/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if(x < 0){
        let temp = -(String(Math.abs(x)).split('').reverse().join(''));
        return temp < -Math.pow(2,31) ? 0 : temp;
    }else{
        let temp =Number(String(x).split('').reverse().join(''));
        return temp > Math.pow(2,31) ? 0 : temp;
    }
};

console.log(reverse((x = -123)));
