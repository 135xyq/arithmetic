/**https://leetcode.cn/problems/check-array-formation-through-concatenation/
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
 var canFormArray = function(arr, pieces) {
    for (var i = 0; i < pieces.length; i++) {
        if(pieces[i].length ===  1){
            if(!arr.includes(pieces[i][0])){
                return false;
            }
        }else{
            let index = arr.indexOf(pieces[i][0])
            if(index === -1){
                return false;
            }
            for(let j = 1 ; j < pieces[i].length; j++) {
                if(pieces[i][j] !== arr[index+j]){
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(canFormArray([91,4,64,78],[[78],[4,64],[91]]))