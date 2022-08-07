/**https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order/
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    nums.sort((a,b)=>b-a);
    let sum = 0;
    for(let i =0 ; i < nums.length;i++){
        sum += nums[i];
    }
    let temp = 0;
    let result = [];
    for(let i = 0 ; i < nums.length; i++){
        if(temp > sum / 2){
            return result;
        }else{
            temp += nums[i];
            result.push(nums[i]);
        }
    }
    return result;

};

console.log(minSubsequence(nums = [6]))