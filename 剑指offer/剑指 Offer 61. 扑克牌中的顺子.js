/**https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    const length = nums.length;
    nums.sort((a, b) => a - b)
    let count = 0;
    for (let index = 0; index < length; index++) {
        if (nums[index] === 0) {
            count++;
        } else {
            break;
        }
    }
    for (let i = count; i < length - 1; i++) {
        const temp = nums[i + 1] - nums[i] - 1;
        if (temp > 0) {
            count -= temp;
        } else if (temp === -1) {
            return false;
        }
        if (count < 0) {
            return false;
        }
    }
    return true;


};

console.log(isStraight([0, 0, 1, 2, 5]))