/**
 * 给你一个下标从 0 开始的字符串数组 words 和一个字符 x 。
 *
 * 请你返回一个 下标数组 ，表示下标在数组中对应的单词包含字符 x 。
 *
 * 注意 ，返回的数组可以是 任意 顺序。
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  return words.reduce((res, word, index) => {
    if (word.includes(x)) {
      res.push(index)
    }
    return res
  }, [])
};

console.log(findWordsContaining(words = ["leet", "code"], x = "e"))