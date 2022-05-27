/**https://leetcode.cn/problems/find-closest-lcci/
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let result = 99999;
    const length = words.length;
    for(let i = 0; i < length; i++) {
        if(words[i] === word1){
            index1 = i;
            if(index2 !== -1){
                result = Math.min(result,Math.abs(index2-index1));
                // console.log(1,words[i],index1,index2,result)
            }
        }else if(words[i] === word2){
            index2 = i;
            if(index1 !== -1) {
                result = Math.min(result,Math.abs(index1-index2));
                // console.log(2,words[i],index1,index2,result)
            }
        }
    }
    return result;
};

console.log(
	findClosest(
		(words = [
			"I",
			"am",
			"a",
			"student",
			"from",
			"a",
			"university",
			"in",
			"a",
			"city",
		]),
		(word1 = "a"),
		(word2 = "student")
	)
);
