/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    for(let i = 0; i < nums.length;i++){
        sum += nums[i];
    }
    let tempSum = 0;
    for(let i =0 ; i < nums.length ;i++){
        if(tempSum ===((sum-nums[i]) / 2)){
            return i
        }
        tempSum += nums[i]
    }
    return -1;
};

console.log(pivotIndex((nums = [2,-1,1])));
