/**https://leetcode.cn/problems/number-of-students-doing-homework-at-a-given-time/
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for(let i = 0 ; i < startTime.length; i++){
        if(queryTime >= startTime[i] && queryTime <= endTime[i]){
            count++;
        }
    }
    return count;
};

console.log(busyStudent(startTime = [1,2,3], endTime = [3,2,7], queryTime = 4))
