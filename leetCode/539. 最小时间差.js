/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
	let arr = [];
	for(let i = 0;i<timePoints.length;i++){
		// 将时间拆开
		const temp = timePoints[i].split(':');
		arr.push(parseInt(temp[0]) * 60 + parseInt(temp[1]))
	}
	arr.sort((a,b)=>a-b);
	let min = 1440 ;
	for(let i = 1;i<arr.length;i++){
		if(min > arr[i] - arr[i-1]){
			min = arr[i] - arr[i-1];
		}
	}
	let maxNum = 24 * 60;
	if(maxNum - arr[arr.length - 1] + arr[0] < min){
		min = maxNum - arr[arr.length - 1] + arr[0]
	}
	return min;
};

console.log(findMinDifference(timePoints = ["23:59","00:00"]))