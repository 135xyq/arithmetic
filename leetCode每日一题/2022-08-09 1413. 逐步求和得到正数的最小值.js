/**https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum/
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let currentSum = 0;
    let startValue  = 0;
    for(let i = 0 ; i < nums.length; i++){
        currentSum += nums[i];
        if(currentSum < 1){
            startValue = startValue - currentSum + 1;
            currentSum += (- currentSum + 1)
        }
    }
    return startValue >= 1 ?startValue : 1;
};


console.log(minStartValue([-4,-1,1,-5,-4,5,5]))
