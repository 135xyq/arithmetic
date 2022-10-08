/**https://www.nowcoder.com/practice/d3df40bd23594118b57554129cadf47b?tpId=295&tqId=1499549&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
 function search( nums ,  target ) {
    // write code here
    let left = 0;
    let right = nums.length- 1;
    let middle;
    while ( left <= right ) {
        middle = Math.floor((left + right) / 2);
        if(nums[middle] === target) {
            return middle;
        }else if(nums[middle] > target) {
            right = middle-1;
        }else{
            left = middle + 1;
        }
    }
    return -1;
}

console.log(search([9999],9999))