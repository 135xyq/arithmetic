/**
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const length = nums.length
  const temp = new Array(length).fill(0)
  const result = []
  for (let i = 0; i < length; i++) {
    temp[nums[i] - 1] = 1
  }
  for (let i = 0; i < length; i++) {
    if (temp[i] === 0) {
      result.push(i + 1)
    }
  }
  return result
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))