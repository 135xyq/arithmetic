/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let temp = []; //存放每一次计算的结果，如果一个数不是快乐数说明到后面会形成循环
    while (1) {
        const nums = getEachNumber(n); //将数字每一项放在数组里;
        let result = nums.map(item => item ** 2); //将数字每一项平方
        let sum = 0; //每一次计算的各项平方和结果
        result.forEach(item => sum += item);
        if (sum === 1) {
            return true;
        }
        if (temp.indexOf(sum) != -1) {
            // 结果形成了循环不会再等于 1 了
            return false;
        }
        temp.push(sum);
        n = sum;
    }
};
/**
 * 取出数字的每一项
 * @param {number} n 传入要处理的数字
 * @param {Array}
 */
function getEachNumber(n) {
    let nums = [];
    while (n > 0) {
        nums.push(Math.floor(n % 10))
        n = Math.floor(n / 10)
    }
    return nums;
}

console.log(getEachNumber(114535))
console.log(isHappy(2))