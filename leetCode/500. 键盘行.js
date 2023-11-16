/**
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 *
 * 美式键盘 中：
 *
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const result = []
  const template = ['qwertyuiopQWERTYUIOP', 'asdfghjklASDFGHJKL', 'zxcvbnmZXCVBNM']
  for (let i = 0; i < words.length; i++) {
    let flag = true
    let firstWord = words[i][0]
    let index = -1;
    for (let j = 0; j < template.length; j++) {
      if (template[j].indexOf(firstWord) !== -1) {
        index = j;
        break;
      }
    }
    for (let j = 1; j < words[i].length; j++) {
      if (template[index].indexOf(words[i][j]) === -1) {
        flag = false
        break;
      }
    }

    if (flag) {
      result.push(words[i])
    }
  }
  return result
};

console.log(findWords(words = ["Hello", "Alaska", "Dad", "Peace"]))