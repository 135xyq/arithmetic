/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let sum = 0;
    const length = timeSeries.length;
    for (let i = 0; i < length; i++) {
        if ((i !== length - 1) && ((timeSeries[i] + duration - 1) < timeSeries[i + 1])) {
            sum += duration;
        } else if ((i !== length - 1) && ((timeSeries[i] + duration - 1) >= timeSeries[i + 1])) {
            sum += (timeSeries[i + 1] - timeSeries[i]);
        } else if (i === length - 1) {
            sum += duration;
        }
    }
    return sum;
};

console.log(findPoisonedDuration(timeSeries = [1, 1], duration = 2));