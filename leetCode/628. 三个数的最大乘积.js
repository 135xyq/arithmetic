/**https://leetcode.cn/problems/maximum-product-of-three-numbers/
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
    const length = nums.length;
    nums.sort((a,b)=>a-b);
    return Math.max((nums[0] * nums[1] * nums[length-1]),(nums[length-1]*nums[length-2]*nums[length-3]))
};

console.log(maximumProduct([-100,-98,-1,2,3,4]))