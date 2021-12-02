/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const length = numbers.length;
    let result = [];
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (numbers[j] + numbers[i] === target) {
                result.push(i + 1, j + 1);
                return result;
            }
        }
    }

};


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const length = numbers.length;
    let left = 0,
        right = 0; //左右边界
    for (let i = 0; i < length; i++) {
        let target1 = target - numbers[i]; //另个数的大小
        right = length - 1;
        left = i + 1;
        let mid = Math.floor((left + right) / 2);
        while (left <= right) {
            if (target1 < numbers[mid]) {
                right = mid - 1;
            } else if (target1 > numbers[mid]) {
                left = mid + 1;
            } else {
                return [i + 1, mid + 1]
            }
            mid = Math.floor((left + right) / 2)
        }
    }

};


console.log(twoSum(numbers = [2, 3, 4], target = 6))