/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
	const arr1 = [...jewels];
	const arr2 = [...stones];
	let sum = 0;
	const map = new Map();
	for(let i = 0 ;i<jewels.length;i++){
		map.set(arr1[i],0);
	}
	for (const item of arr2){
		if(map.has(item)){
			map.set(item,map.get(item)+1)
		}
	}
	for (const [key,value] of map){
		sum += value;
	}
	return sum;
};



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
	let sum =0;
	for(let i =0 ;i<stones.length;i++){
		if(jewels.indexOf(stones[i]) != -1){
			sum++;
		}
	}
	return sum;
};

console.log(numJewelsInStones(jewels = "c", stones = "aAAbbbb"))