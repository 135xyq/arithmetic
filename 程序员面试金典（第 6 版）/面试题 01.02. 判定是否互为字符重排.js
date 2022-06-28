/**https://leetcode.cn/problems/check-permutation-lcci/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    return s1.split("").sort().join("") ===s2.split("").sort().join("");
};


var CheckPermutation = function(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }
    const map = new Map();
    for (const item of s1) {
        if(map.has(item)){
            map.set(item,map.get(item) + 1)
        }else{
            map.set(item,1)
        }
    }
    for (const item of s2) {
        if(map.has(item)){
            let temp = map.get(item);
            if(temp === 0){
                return false;
            }else{
                map.set(item,temp-1)
            }
        }else{
            return false;
        }
    }
    return true;
};

console.log(CheckPermutation(s1 = "abc", s2 = "bewc"))