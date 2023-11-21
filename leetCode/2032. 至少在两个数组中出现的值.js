/**
 * 给你三个整数数组 nums1、nums2 和 nums3 ，请你构造并返回一个 元素各不相同的 数组，且由 至少 在 两个 数组中出现的所有值组成。数组中的元素可以按 任意 顺序排列。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]
  nums3 = [...new Set(nums3)]
  const map = new Map()
  const tempArr = [nums1, nums2, nums3]
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = 0; j < tempArr[i].length; j++) {
      map.set(tempArr[i][j], map.get(tempArr[i][j]) ? map.get(tempArr[i][j]) + 1 : 1)
    }
  }

  const result = []
  for (const [key, value] of map) {
    if (value >= 2) {
      result.push(key)
    }
  }
  return result
};

console.log(twoOutOfThree(nums1 = [3, 1], nums2 = [2, 3], nums3 = [1, 2]))