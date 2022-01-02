/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
	let arr = [];
	for(let i = 1;i<=n;i++){
		arr.push(i);
	}
	let flag = 1;
	while (arr.length > 1){
		let length = arr.length;
		// 从左到右消除
		if(flag % 2 === 1){
			for(let j = 0;j<Math.ceil(length / 2);j++){
				if(arr.length > 1){
					arr.splice(j,1);
				}
			}
		}else{
			// 从右往左消除
			for(let j = length -1;j>=0;j-=2){
				if(arr.length > 1){
					arr.splice(j,1)
				}
			}
		}
		flag++;
	}
	return arr[0];
};


/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
	return n == 1 ? 1 : 2 * (parseInt(n / 2) + 1 - lastRemaining(parseInt(n / 2)));
};

console.log(lastRemaining(10))