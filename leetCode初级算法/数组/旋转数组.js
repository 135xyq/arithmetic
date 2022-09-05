/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    for(let i = 0; i < (k % nums.length);i++){
        nums.unshift(nums.pop())
    }
    return nums;
};


/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const length=nums.length
    let count = k % length;
    nums.unshift(...nums.splice(length-count,count))
    return nums;
};


console.log(rotate( nums = [1,2,3,4,5,6,7], k = 3))