/**
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
 *
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = new Map();
  nums.forEach(item => {
    map.set(item, map.get(item) ? (map.get(item) + 1) : 1)
  })
  let maxCount = -1
  let maxList = []
  for (const [key, value] of map) {
    if (value > maxCount) {
      maxList = []
      maxCount = value
      maxList.push(key)
    } else if (value === maxCount) {
      maxList.push(key)
    }
  }

  let min = Infinity
  for (const maxListKey of maxList) {
    const startIndex = nums.indexOf(maxListKey)
    const endIndex = nums.lastIndexOf(maxListKey)

    min = Math.min(min, endIndex - startIndex + 1)
  }

  return min
};

console.log(findShortestSubArray(nums = nums = [1, 2, 2, 3, 1]))