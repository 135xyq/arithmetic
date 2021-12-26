/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
	let count = 0;
	let months = [31,28,31,30,31,30,31,31,30,31,30,31];
	// 年月日拆开
	const nums = date.split('-');

	const year = parseInt(nums[0]);
	const month = parseInt(nums[1]);
	const day = parseInt(nums[2])
	// 判断是不是闰年
	if((year % 4 === 0 && year % 100 !== 0)||year % 400 === 0){
		if(month > 2){
			count++;
		}
	}
	for(let i = 1;i<month;i++){
		count += months[i-1];
	}
	count += day;
	return count;
};

console.log(dayOfYear(date = "2003-03-01"))