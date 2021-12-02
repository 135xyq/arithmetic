/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0;) {
        if (digits[i] === 9 && i === 0) {
            digits[i] = 0;
            digits.unshift(1);
            break;
        } else if (digits[i] === 9 && i !== 0) {
            while (digits[i] === 9) {
                if (i !== 0) {
                    digits[i] = 0;
                    i--;
                } else {
                    digits[i] = 0;
                    digits.unshift(1);
                    i--;
                }
            }
        } else {
            digits[i]++;
            break;
        }
    }
    return digits;
};


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.join('')) + BigInt(1); //将数组转为字符串后转为整数
    const result = [];
    for (const i of num.toString()) {
        result.push(i);
    }
    return result;
};


var plusOne = function(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('');
};


console.log(plusOne([1, 9, 9]))