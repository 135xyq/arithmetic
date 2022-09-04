/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 1 ;i < nums.length; ){
        if(nums[i] === nums[i-1]){
            nums.splice(i,1)
        }else{
            i++
        }
    }
    return nums.length
};

console.log(removeDuplicates(nums = [0,0,1,1,1,1,2,2,3,3,4]))