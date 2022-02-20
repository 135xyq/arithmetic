/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
	const length = bits.length;
	for(let i = 0; i < length; ) {
		if(i === length -1) {
			return true;
		}
		if(bits[i] === 1) {
			i += 2;
		}else{
			i++;
		}
	}
	return false;
};

console.log(isOneBitCharacter([0,0]))

