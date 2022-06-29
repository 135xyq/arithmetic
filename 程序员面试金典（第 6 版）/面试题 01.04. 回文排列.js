/**https://leetcode.cn/problems/palindrome-permutation-lcci/
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
    const map = new Map();
    for (const item of s) {
        if(map.has(item)){
            map.set(item,map.get(item) + 1);
        }else{
            map.set(item,1)
        }
    }
    let count = 0;//奇数个字母的个数
    for (const [item,value] of map) {
        if(value %2 === 1){
            count++;
        }
    }
    if(count > 1){
        return false;
    }else{
        return true
    }
};

/**https://leetcode.cn/problems/palindrome-permutation-lcci/
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
    const tempArr = s.split("").sort();
    let count = 0;
    for(let i = 0;i < tempArr.length;){
        let temp = 1;
        while(tempArr[i] === tempArr[temp+i]){
            temp++;
        }
        // console.log(temp)
        if(temp %2 === 1){
            count++;
        }
        i+=temp;
    }
    if(count > 1){
        return false;
    }else{
        return true
    }
};


console.log(canPermutePalindrome("as"))