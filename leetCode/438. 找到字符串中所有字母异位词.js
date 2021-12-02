/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	let result = [];//结果
	const slength = s.length;
	const plength = p.length;
	const arr = s.split('');
	const p1 = p.split('').sort().join('');//将p转为数组排序后再转为字符串
	for(let i = 0;i<=slength - plength;i++){
		let temp = arr.slice(i,plength+i)
		if(temp.sort().join('') === p1)
		result.push(i)
	}

	return result;
};


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	let result = [];//结果
	const slength = s.length;
	const plength = p.length;
	const pmap = new Map();
	// 将字符串p的单词和个数映射到map对象中
	for(let i = 0;i<plength;i++){
		if(pmap.has(p.charAt(i))){
			pmap.set(p.charAt(i),pmap.get(p.charAt(i))+1)
		}else{
			pmap.set(p.charAt(i),1);
		}
	}
	for(let i = 0;i<=slength-plength;i++){
		const temp = new Map(pmap);
		let j;
		for( j = i;j<i+plength;j++){
		
			if(!temp.has(s.charAt(j))||temp.get(s.charAt(j))===0){
				break;
			}else{
				temp.set(s.charAt(j),temp.get(s.charAt(j))-1);
			}
		}
		if(j===i+plength){
			result.push(i)
		}
	}
	return result;
};

console.log(findAnagrams(s = "abab", p = "ab"))