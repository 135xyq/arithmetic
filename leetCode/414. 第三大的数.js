/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //将数组去重
    const newNums = [...new Set(nums)];
    newNums.sort((a, b) => b - a);
    if (newNums.length >= 3) {
        return newNums[2];
    } else {
        return newNums[0]
    }
};

console.log(thirdMax([2, 1]))