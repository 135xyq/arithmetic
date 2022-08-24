/**https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    target.sort((a,b)=>a-b);
    arr.sort((a,b)=>a-b);
    for(let  i = 0 ; i < arr.length; i++){
        if(arr[i] !== target[i]){
            return false;
        }
    }
    return true;
};



/**https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    const map1 = new Map()
    const map2 = new Map()
    for (const item of target) {
        map1.set(item,(map1.get(item) || 0) + 1)
    }
    for (const item of arr) {
        map2.set(item,(map2.get(item) || 0) + 1)
    }

    for (const [key,value] of map1) {
        if(!map2.has(key) || map2.get(key) !== value){
            return false;
        }
    }
    return true;
};

console.log(canBeEqual(target = [1,2,3,4], arr = [2,5,1,3]))