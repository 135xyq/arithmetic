/**https://leetcode.cn/problems/set-mismatch/
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let result = [];
    const set = new Set();
    let sum = ((nums.length) * (nums.length+1)) / 2;
    for (const num of nums) {
        if(set.has(num)){
            result[0] = num;
        }else{
            set.add(num)
        }
    }
    let temp = 0;
    for (const num of set) {
        temp += num;
    }
    result[1] = sum - temp;
    return result;

};

console.log(findErrorNums(nums = [1,1]))