/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn96us/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let arr1 = s.split('').sort();
    let arr2 = t.split('').sort();
    for(let i =0  ;i < arr1.length ;i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};


/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn96us/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const map = new Map();
    for (const item of s) {
        if(map.has(item)){
            map.set(item,map.get(item) + 1)
        }else{
            map.set(item,1)
        }
    }
    // console.log(map)
    for (const item of t) {
        if(map.has(item)){
            let count = map.get(item)
            if(count > 0){
                map.set(item,count-1);
            }else{
                return false;
            }
        }else{
            return false
        }
    }
    return true;
};


console.log(isAnagram(s = "rat", t = "car"))