/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
	// 将字符串转为数组后截取
	return s.split(' ').splice(0,k).join(' ')
};


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
	const length = s.length;
	let result = '';
	let count = 0;
	for(let i = 0;i<length;i++){
		if(s.charAt(i)===' '){
			count++;
		}
		if(count === k){
			break;
		}else{
			result += s.charAt(i);
		}
		
	}
	return result;
};

console.log(truncateSentence(s = "What is the solution to this problem", k = 4))