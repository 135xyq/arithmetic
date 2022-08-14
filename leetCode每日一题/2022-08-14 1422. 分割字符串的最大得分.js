/**https://leetcode.cn/problems/maximum-score-after-splitting-a-string/
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let maxNum = 0;
    let result = 0;
    for(let i = 0 ; i < s.length;i++){
        result += parseInt(s[i]);
    }
    for(let i = 0 ; i < s.length-1;i++){
        let temp = result;
        for(let j = 0 ;j  <= i ; j++) {
            if(s[j] === "0"){
                temp++;
            }else{
                temp--;
            }
        }
        if(temp  >maxNum){
            maxNum = temp;
        }
    }
    return maxNum;
};

/**https://leetcode.cn/problems/maximum-score-after-splitting-a-string/
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let maxNum = 0;
    let result = 0;
    if(s[0] === "0"){
        result++;
    }
    for(let i = 1 ; i < s.length;i++){
        result += parseInt(s[i]);
    }
    maxNum = result;
    for(let i = 1 ; i < s.length-1;i++){
        if(s[i] === "0"){
            result++;
        }else{
            result--;
        }
        maxNum = Math.max(maxNum,result)
    }
    return maxNum;
};

console.log(maxScore(s = "011101"))