/**https://leetcode.cn/problems/verifying-an-alien-dictionary/
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let temp = [...words]
    temp.sort((a,b)=>{
        let i = 0;
        while(i < a.length || i < b.length) {
            if(a[i] !== b[i]){
                return order.indexOf(a[i]) - order.indexOf(b[i])
            }
            i++;
        }
    })
    for(let i = 0; i < temp.length;i++) {
        if(temp[i] !== words[i]){
            return false;
        }
    }
    return true;
};

console.log(isAlienSorted(["apple","app"],
"abcdefghijklmnopqrstuvwxyz"))