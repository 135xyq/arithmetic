/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
	const arr1 = s1.split(" ");
	const arr2 = s2.split(" ");
	const map1 = new Map();
	const map2 = new Map();
	const arr = [];
	arr1.forEach(item=>{
		if(map1.has(item)){
			map1.set(item,map1.get(item)+1)
		}else{
			map1.set(item,1);
		}
	})
	arr2.forEach(item=>{
		if(map2.has(item)){
			map2.set(item,map2.get(item)+1)
		}else{
			map2.set(item,1);
		}
	})
	for (const [key,value] of map1){
		if(!map2.has(key)&&value==1){
			arr.push(key);
		}
	}
	for (const [key,value] of map2){
		if(!map1.has(key)&&value==1){
			arr.push(key);
		}
	}
	return arr;
};

console.log(uncommonFromSentences(s1 = "this apple is sweet", s2 = "this apple is sour"))