/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const length = nums.length;
    let i, j;
    for (i = 0; i < length; i++) {
        if (nums.indexOf(nums[i], i + 1) === -1 && nums.indexOf(nums[i]) === i) {
            return nums[i]
        }
    }
};

var singleNumber = function(nums) {
    const set = new Set(nums); //将nums转为集合
    let sum1 = 0; //求set集合各项的和
    let sum2 = 0; //求数组的各项和
    for (const item of set) {
        sum1 += item;
    }
    nums.forEach(vaule => {
        sum2 += vaule;
    })
    return (2 * sum1) - sum2;
};

console.log(singleNumber([4, 1, 2, 1, 2]))