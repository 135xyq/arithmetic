/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
	let thirdWord = [];//结果
	// 将字符串转为数组
	const textArr = text.split(' ');
	for(let i = 0 ;i<textArr.length-2;i++){
		if(textArr[i]===first &&textArr[i+1] === second){
			thirdWord.push(textArr[i+2])
		}
	}
	return thirdWord;
};


console.log(findOcurrences(text = "we will we will rock you", first = "we", second = "will"))