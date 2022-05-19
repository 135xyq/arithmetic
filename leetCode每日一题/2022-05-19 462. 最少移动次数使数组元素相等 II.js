/**https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/
 * @param {number[]} nums
 * @return {number}
 * 求出中位数，再遍历求和
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=>a-b);
    const length = nums.length;

    if(length % 2 === 1){
        let result = 0;
        let middleNum = nums[Math.floor(length / 2)];
        nums.forEach(item=>{
            result += (Math.abs(item - middleNum));
        })
        return result;
    }else{
        let num1 = nums[Math.floor(length / 2) - 1];
        let num2 = nums[Math.floor(length / 2)];
        let result1 = 0,result2=0;
        nums.forEach(item=>{
            result1 += (Math.abs(item - num1));
            result2 += (Math.abs(item - num2));
        })
        return Math.min(result1,result2);
    }

};


console.log(minMoves2(nums = [1,10,2,9]))