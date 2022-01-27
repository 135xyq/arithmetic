/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
	/*
	仅由小写字母、连字符和/或标点（不含数字）。
	至多一个 连字符 '-' 。如果存在，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
	至多一个 标点符号。如果存在，标点符号应当位于 token 的 末尾 。
	*/

	const arr =  sentence.trim().replace(/ +/g,' ').split(' ');
	let count = 0;
	const reg1 = /^[a-z]*[!,.]{0,1}$/;//无 - 
	const reg2 = /^[a-z]+-[a-z]+[!,.]{0,1}$/;//有 -
	arr.forEach(item=>{
		
		if(reg1.test(item)|| reg2.test(item)){
			count++;
		}
	})
	return count;
};


/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
	const arr =  sentence.split(' ');
	let count = 0;
	arr.forEach(item=>{
		if(item !=''){
			let flag1  = 0;//连字符的个数
			let flag2 = 0;//标点符号的个数
			let i;
			for(i = 0;i<item.length;i++){
				if(item[i] >= '0' && item[i] <= "9"){
					break;
				}else if(item[i] === '-'){
					if(flag1 > 0 || i===0 || i ===item.length-1|| item[i-1] < 'a' || item[i-1]>'z' || item[i+1] <'a'||item[i+1] >'z'){
						break;
					}
					flag1++;
				}else if(item[i] === '!' || item[i]==="." || item[i] ===','){
					if(flag2 > 0 || i !== item.length-1){
						break;
					}
					flag2++;
				}
			}
			if(i === item.length){
				count++;
			}
		}
	})
	return count;
};

console.log(countValidWords("a-b-c"))