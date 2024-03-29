/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = []
  for (let i = 0 ; i<nums1.length ;i++) {
    if(nums2.indexOf(nums1[i]) !== -1) {
      result.push(nums1[i])
    }
  }
  return [...new Set(result)]
};