/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	// 将杂志字符串映射到map集合
	const map = new Map();
	for(let i = 0;i<magazine.length;i++){
		if(map.has(magazine.charAt(i))){
			map.set(magazine.charAt(i),map.get(magazine[i])+1);
		}else{
			map.set(magazine[i],1);
		}
	}
	// 将赎金信映射到map1中
	const map1 = new Map();
	for(let i = 0;i<ransomNote.length;i++){
		if(map1.has(ransomNote.charAt(i))){
			map1.set(ransomNote.charAt(i),map1.get(ransomNote[i])+1);
		}else{
			map1.set(ransomNote[i],1);
		}
	}
	for (const [key,value] of map1){
		if(map.has(key) && map.get(key)>=value){
			continue;
		}else{
			return false;
		}
	}
	return true;
	
};

console.log(canConstruct(ransomNote = "aa", magazine = "aab"))