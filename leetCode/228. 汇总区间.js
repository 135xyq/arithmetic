/**
 * 给定一个  无重复元素 的 有序 整数数组 nums 。
 *
 * 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
 *
 * 列表中的每个区间范围 [a,b] 应该按如下格式输出：
 *
 * "a->b" ，如果 a != b
 * "a" ，如果 a == b
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  let result = []

  for (let i = 0; i < nums.length;i++) {
    let tempStart = nums[i]
    let tempEnd = nums[i]
    if(nums[i] + 1 === nums[i+1]) {
      for (let j = i; j < nums.length ;j++) {
        if(nums[j] + 1 === nums[j+1]) {
          tempEnd = nums[j+1]
        }else{
          i = j
          break
        }
      }
    }

    if(tempStart === tempEnd) {
      result.push(tempStart +'')
    }else{
      result.push(tempStart + '->' + tempEnd)
    }
  }
  return result
};

console.log(summaryRanges(nums = [0,1,2,4,5,7]))