/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a,b)=>a-b);
    for(let i=0 ; i < nums.length;i+=2){
        if(nums[i] !==nums[i+1]){
            return nums[i]
        }
    }
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    const map = new Map();
    for(let i=0;i <nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],2)
        }else{
            map.set(nums[i],1)
        }
    }
    for (const [key,value] of map) {
        if(value===1){
            return key
        }
    }
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    let temp = 0;
    for (const num of nums) {
        temp ^= num;
    }
    return temp
};

console.log(singleNumber([4, 1, 4, 1, 2]));
