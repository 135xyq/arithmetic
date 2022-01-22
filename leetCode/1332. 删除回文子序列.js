/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
	const length = s.length;
	for(let i = 0 ;i<Math.floor(length /2);i++){
		if(s[i] !== s[length - i -1]){
			return 2;
		}
	}
	return 1
};


console.log(removePalindromeSub(s = "ababa"))