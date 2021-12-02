/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let result = 0; //返回结果
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1)
        }
    }
    for (const [key, value] of map) {
        const right = map.get(key + 1) ? map.get(key + 1) : 0;
        const left = map.get(key - 1) ? map.get(key + 1) : 0;
        let max = Math.max(left, right);
        if ((max + value) > result && max > 0) {
            result = max + value;
        }
    }
    return result;
};

console.log(findLHS(nums = [1, 1, 1, 1]))