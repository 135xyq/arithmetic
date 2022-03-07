/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
	let str = ''
	let arr = [];
	if(num < 0){
		str = '-'
	}else if(num === 0){
		return '0';
	}
	num = Math.abs(num);
    while(num>0){
        arr.unshift(num % 7);
        num = Math.floor(num / 7); 
    }
    return str + arr.join('');
    
};

console.log(convertToBase7(-7))