/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let result = [intervals[0]];
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] <= result[result.length - 1][1]) {
			if (intervals[i][1] > result[result.length - 1][1]) {
				result[result.length - 1][1] = intervals[i][1];
			}
		}else{
            result.push(intervals[i])
        }
	}
    return result;
};

console.log(
	merge(
		(intervals = [
			[1, 3],
			[2, 6],
			[15, 18],
			[8, 10],
		])
	)
);
