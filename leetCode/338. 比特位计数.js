/**
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = []
  for (let i = 0; i <= n; i++) {
    let count = 0
    let temp = i
    while (temp) {
      if (temp % 2) {
        count++
      }
      temp = Math.floor(temp / 2)
    }
    result[i] = count
  }
  return result
};

console.log(countBits(25))