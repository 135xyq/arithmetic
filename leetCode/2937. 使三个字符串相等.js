/**
 * 给你三个字符串 s1、s2 和 s3。 你可以根据需要对这三个字符串执行以下操作 任意次数 。
 *
 * 在每次操作中，你可以选择其中一个长度至少为 2 的字符串 并删除其 最右位置上 的字符。
 *
 * 如果存在某种方法能够使这三个字符串相等，请返回使它们相等所需的 最小 操作次数；否则，返回 -1。
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  let len1 = s1.length;
  let len2 = s2.length;
  let len3 = s3.length;
  let count = -1;
  let template1 = ''
  for (let i = 0; i < len1; i++) {
    if (s1[i] === s2[i]) {
      template1 += s1[i]
    } else {
      break
    }
  }

  let template2 = ''
  for (let i = 0; i < template1.length; i++) {
    if (template1[i] === s3[i]) {
      template2 += template1[i]
    } else {
      break
    }
  }
  if (template2 === '') {
    return -1
  } else {
    return len1 + len2 + len3 - template2.length * 3
  }
};

console.log(findMinimumOperations(s1 = "abc", s2 = "abb", s3 = "ab"))