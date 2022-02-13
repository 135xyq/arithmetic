/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
	// 字符串中各个单词的数量
	let count_a = 0;
	let count_b = 0;
	let count_o = 0;
	let count_n = 0;
	let count_l = 0;
	let length = text.length;
	for(let i = 0; i <length; i++){
		switch (text[i]) {
			case 'a':
				count_a++;
				break;
			case 'b':
				count_b++;
				break;			
			case 'o':
				count_o++;
				break;			
			case 'n':
				count_n++;
				break;			
			case 'l':
				count_l++;
				break;
		}
	}
	const maxCount = Math.min(count_a,count_b,Math.floor(count_o / 2),Math.floor(count_l / 2),count_n);
	return maxCount;
};

console.log(maxNumberOfBalloons("balon"))