/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
	// 将arr1映射到Map集合中值为元素的个数
	const map = new Map();
	arr1.forEach(item=>{
		if(map.has(item)){
			map.set(item,map.get(item)+1);
		}else{
			map.set(item,1);
		}
	});
	let result  =[];
	//遍历数组arr2按顺序将map中的值push到result中
	arr2.forEach(item=>{
		for(let i = 0;i<map.get(item);i++){
			result.push(item);
		}
		map.delete(item);
	});
	let other = [];
	for (const [key,value] of map){
		for(let i = 0;i<value;i++){
			other.push(key);
		}
	}
	result.push(...other.sort((a,b)=>a-b)) ;
	return result;
};

console.log(relativeSortArray([2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31],
[2,42,38,0,43,21]))