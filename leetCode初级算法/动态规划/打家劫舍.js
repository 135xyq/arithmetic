/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let dp = new Array(nums.length);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = []
    }
    dp[0][0] =  0;
    dp[0][1] = nums[0];
    let i = 0;
    for(i = 1; i < nums.length; i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]);
        dp[i][1] = dp[i-1][0] + nums[i];
    }
    return Math.max(dp[i-1][0],dp[i-1][1])

};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let dp0 = 0;
    let dp1 = nums[0];
    for(let i = 1; i < nums.length; i++){
        let temp = Math.max(dp0,dp1);
        dp1 = dp0 + nums[i];
        dp0 = temp;
    }
    return Math.max(dp1,dp0)

};
console.log(rob([1,2,3,1]))