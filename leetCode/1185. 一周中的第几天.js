/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
	const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	return week[new Date(year,month-1,day).getDay()]
};


/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
	// 1970 年 12 月 31 日是星期四，
	const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
	const week = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
	const yearNum = year - 1971;
	const monthNum = month  - 1;
	const dayNum = day;
	let daySum = yearNum * 365;
	for(let i = 1971;i<=year;i++){
		if((i% 4=== 0&&i%100!==0)||(i % 400 ===0) ){
			if(i === year && month < 3){
				continue;
			}else{
				daySum++;
			}
		}
	}
	for(let i =0 ;i<monthNum;i++){
		daySum+= monthDays[i]
	}
	daySum += dayNum;
	console.log((daySum+3)%7)
	return week[(daySum+3)%7]
};

console.log(dayOfTheWeek(day = 29, month = 2, year = 2016))
