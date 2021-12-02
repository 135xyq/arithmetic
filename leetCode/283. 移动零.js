/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left; //左指针，开始循环
    let length = nums.length;
    let right = length - 1; //右指针的最开始位置
    for (left = 0; left <= right;) {
        // 如果当前项是0则将当前项之后的数值向前移一位
        if (nums[left] === 0) {
            for (let j = left + 1; j <= right; j++) {
                nums[j - 1] = nums[j]
            }
            nums[right] = 0;
            right--;
        } else {
            left++;
        }
    }
};

console.log(moveZeroes([0, 0, 1]))