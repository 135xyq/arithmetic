/**
 * 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。
 *
 * 序号代表了一个元素有多大。序号编号的规则如下：
 *
 * 序号从 1 开始编号。
 * 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
 * 每个数字的序号都应该尽可能地小。
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const result = []
  const temp = [...new Set(arr)]
  temp.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    result.push(temp.indexOf(arr[i]) + 1)
  }

  return result
};

console.log(arrayRankTransform(arr = [40, 10, 20, 30]))