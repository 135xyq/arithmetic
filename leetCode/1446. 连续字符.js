/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
	let max = 1;
	let temp = 1;
	let i ;
	// 遍历字符串，遇到不是一样的字符据重新计算
	for(i= 1;i<s.length;i++){
		if(s.charAt(i)===s.charAt(i-1)){
			temp++;
		}else{
			temp = 1;
		}
		if(temp > max){
			max =  temp;
		}

	}
	return max;
};

console.log(maxPower(s = "cc"))