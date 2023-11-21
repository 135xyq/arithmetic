/**
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];
  const temp = new Array(words.length)
  for (var i = 0; i < words.length; i++) {
    temp[i] = new Array(26).fill(0)
    for (let j = 0; j < words[i].length; j++) {
      const index = words[i].charCodeAt(j) - 97
      temp[i][index] = temp[i][index] + 1
    }
  }
  for (let i = 0; i < 26; i++) {
    let min = temp[0][i]
    for (let j = 0; j < words.length; j++) {
      min = Math.min(min, temp[j][i])
    }
    while (min > 0) {
      result.push(String.fromCharCode(i + 97))
      min--
    }
  }
  return result
};

console.log(commonChars(words = ["bella", "label", "roller"]))