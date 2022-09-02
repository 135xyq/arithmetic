/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = strs[0];
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        let temp =""
        for(j; j < strs[i].length,j<common.length;j++){
            if(common[j] === strs[i][j]){
                temp+=common[j];
            }else{
                break;
            }
        }
        common = temp;
    }
    return common;
};

console.log(longestCommonPrefix((strs = ["flower", "flow", "flight"])));
