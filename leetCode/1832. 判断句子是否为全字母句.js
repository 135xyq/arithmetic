/**
 * 全字母句 指包含英语字母表中每个字母至少一次的句子。
 *
 * 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。
 *
 * 如果是，返回 true ；否则，返回 false 。
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  return (new Set(sentence.split(''))).size === 26
};


var checkIfPangram = function (sentence) {
  for (let i = 0; i < 26; i++) {
    if (!sentence.includes(String.fromCharCode(i + 97))) return false;
  }
  return true;
};

console.log(checkIfPangram(sentence = "tequickbrownfoxjumpsoverydog"))