/**https://leetcode.cn/problems/string-matching-in-an-array/
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    let result = [];
    for(let i = 0 ; i < words.length; i++){
        for(let j =0;j < words.length;j++){
            if(words[j].indexOf(words[i]) !== -1 && i!==j){
                result.push(words[i]);
                break;
            }
        }
    }
    return result;

};

console.log(stringMatching(words = ["mass","as","hero","superhero"]))