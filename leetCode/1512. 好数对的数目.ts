// /**
//  * 给你一个整数数组 nums 。
//  *
//  * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
//  *
//  * 返回好数对的数目。
//  * @param nums
//  */
// function numIdenticalPairs(nums: number[]): number {
//   let result: number = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) result++
//     }
//   }
//   return result
// }
//

/**
 * 给你一个整数数组 nums 。
 *
 * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
 *
 * 返回好数对的数目。
 * @param nums
 */
function numIdenticalPairs(nums: number[]): number {
  let result: number = 0
  // @ts-ignore
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1)
  }

  for (const [key, val] of map) {
    if (val >= 2) {
      result += (val - 1) * val / 2
    }
  }
  return result
}


console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))