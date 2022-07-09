/**https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let count1 = 0;
    let count2 = 0;
    for(let i = 0 ; i < position.length; i++) {
        if(position[i] %2 === 0){
            count2++;
        }else{
            count1++;
        }
    }
    return Math.min(count1,count2)
};


console.log(minCostToMoveChips(position = [1,2,3]))