/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n < 3){
        return n;
    }
    return climbStairs(n - 1) + climbStairs(n - 2)
};

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1
    for(let i = 2 ;i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};

console.log(climbStairs(4))