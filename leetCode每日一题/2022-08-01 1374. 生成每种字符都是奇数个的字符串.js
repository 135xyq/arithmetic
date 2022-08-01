/**https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts/
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    let result = '';
    if(n % 2 === 0){
        result += 'a';
        for(let i = 0 ;i < n-1; i++){
            result+= 'b';
        }
    }else{
        for(let i = 0 ;i < n; i++){
            result+= 'b';
        }
    }
    return result;
};


/**https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts/
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    if(n % 2 === 0){
        return 'a' + 'b'.repeat(n-1)
    }else{
        return 'a'.repeat(n)
    }
};


console.log(generateTheString(4))