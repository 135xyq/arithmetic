/**https://leetcode.cn/problems/distance-between-bus-stops/
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
 var distanceBetweenBusStops = function(distance, start, destination) {
    let left = 0;
    let right = 0;
    const length = distance.length;
    let max = Math.max(start,destination);
    let min = Math.min(start,destination);
    for(let i = min; i < max; i++){
        left+=distance[i];
    }
    for(let i = max; i < (length + min); i++){
        // console.log(distance[(i+max) % length])
        right += distance[i % length];
    }
    // console.log(left,right)
    return Math.min(left,right)
};

console.log(distanceBetweenBusStops(distance = [1,2,3], start = 0, destination = 1))