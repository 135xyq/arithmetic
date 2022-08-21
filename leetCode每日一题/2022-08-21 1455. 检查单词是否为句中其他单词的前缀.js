/**https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const arr = sentence.split(" ");
    for(let i =0 ; i < arr.length;i++){
        if(arr[i].indexOf(searchWord) === 0){
            return i + 1;
        }
    }
    return -1;
};

console.log(isPrefixOfWord(sentence = "i love eating burger", searchWord = "burg"))