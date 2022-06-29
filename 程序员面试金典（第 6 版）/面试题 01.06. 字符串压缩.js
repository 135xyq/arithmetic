/**https://leetcode.cn/problems/compress-string-lcci/
 * @param {string} S
 * @return {string}
 */
 var compressString = function(S) {
    let str= "";
    for(let i=0;i<S.length;){
        let count = 1;
        while(S[i] === S[i+count]){
            count++;
        }
        str+=`${S[i]}${count}`;
        i+=count
    }
    return str.length < S.length ? str:S;
};

console.log(compressString("aabcccccaaa"))