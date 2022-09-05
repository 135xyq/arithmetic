/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2cv1c/
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let j = digits.length-1;
    while(true){
        if(j===-1){
            digits.unshift(1);
            break;
        }
        if((digits[j] + 1) === 10){
            digits[j] = 0;
            j--;
        }else{
            digits[j]++;
            break;
        }
    }
    return digits;
};

console.log(plusOne(digits = [9,9]))