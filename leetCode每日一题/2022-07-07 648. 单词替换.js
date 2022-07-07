/**https://leetcode.cn/problems/replace-words/
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a,b)=>a.length-b.length);
    let arr = sentence.split(" ");
    for (let j = 0 ; j < arr.length;j++) {
        for(let i= 0 ; i < dictionary.length;i++){
            if(arr[j].indexOf(dictionary[i]) === 0){
                arr[j] = dictionary[i];
                break;
            }
        }
    }
    return arr.join(" ");

};

console.log(replaceWords(dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"));