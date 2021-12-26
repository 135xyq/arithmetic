/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
	// 将字符串全转为小写字母
	const temp = licensePlate.toLowerCase();
	let map = new Map();//统计各个单词的个数
	for (const item of temp){
		// 将小写字母过滤
		if(item>='a' && item<='z'){
			if(map.has(item)){
				map.set(item,map.get(item) + 1)
			}else{
				map.set(item,1);
			}
		}
	}

	let index = null;//最短词的下标
	for(let i =0 ;i<words.length;i++){
		const temp = new Map(map);
		for(const word of words[i]){
			if(temp.has(word)){
				temp.set(word,temp.get(word) - 1 );
			}
		}
		let flag = true;//为true说明该单词是补全词
		for (const [key,value] of temp){
			if(value > 0){
				flag = false;
			}
		}

		if(flag){
			if(index===null || words[i].length < words[index].length){
				index = i;
			}
		}
	}
	return words[index];
};


console.log(shortestCompletingWord(licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]))
