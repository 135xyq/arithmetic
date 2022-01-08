/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
	const stack = [];
	let max = 0;
	for(let i = 0;i < s.length;i++){
		if(s.charAt(i) === '('){
			stack.push(s.charAt(i))
		}else if(s.charAt(i) === ')'){
			max = stack.length > max ? stack.length : max;
			stack.pop()
		}
	}
	return max;
	
};

console.log(maxDepth(s = "(1)+((2))+(((3)))"))