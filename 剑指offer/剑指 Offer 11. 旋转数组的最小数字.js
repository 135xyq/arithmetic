/**https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    return Math.min(...numbers);
};


/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let length = numbers.length;
    let left = 0;
    let right = length - 1;
    let middle;
    while (left < right) {
        middle = Math.floor((left + right) / 2);
        if (numbers[middle] > numbers[right]) {
            left = middle + 1;
        } else if (numbers[middle] < numbers[right]) {
            right = middle;
        } else {
            right -= 1;
        }
    }
    return numbers[left]
};

console.log(minArray(numbers = [2, 2, 2, 0, 1]))