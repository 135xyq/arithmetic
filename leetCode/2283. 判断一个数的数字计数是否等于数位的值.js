/**
 * 给你一个下标从 0 开始长度为 n 的字符串 num ，它只包含数字。
 *
 * 如果对于 每个 0 <= i < n 的下标 i ，都满足数位 i 在 num 中出现了 num[i]次，那么请你返回 true ，否则返回 false 。
 * @param {string} num
 * @return {boolean}
 */
const digitCount = function (num) {
  const map = new Map();
  for (let i = 0; i < num.length; i++) {
    map.set(num[i], map.get(num[i]) ? map.get(num[i]) + 1 : 1)
  }
  console.log(map)
  for (let i = 0; i < num.length; i++) {
    if (map.get(i + '') == undefined && num[i] + 0 != 0) {
      return false;
    }
    if (map.get(i + '') != num[i] && map.get(i + '') !== undefined) {
      return false;
    }

  }
  return true
};

console.log(digitCount(num = "1"))