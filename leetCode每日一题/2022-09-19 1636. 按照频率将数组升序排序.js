/**https://leetcode.cn/problems/sort-array-by-increasing-frequency/
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1)
        }
    }
    let arr = []
    for (const [key,value] of map) {
        arr.push({key:key,value:value})
    }
    arr.sort((a, b) =>{
        if(a.value < b.value){
            return -1;
        }else if(a.value > b.value){
            return 1;
        }else{
            return b.key - a.key
        }
    })
    let result = [];
    for (const item of arr) {
        for(let i=0;i <item.value;i++){
            result.push(item.key)
        }
    }
    return result
};

console.log(frequencySort(nums = [-1,1,-6,4,5,-6,1,4,1]))