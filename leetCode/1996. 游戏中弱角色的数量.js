/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
	// 按照攻击力高低排序
	properties.sort((a,b)=>a[0]===b[0]?b[1] - a[1] : a[0] - b[0]);
	let count = 0;
	let arr = [];
	for (const propertie of properties){
		while (arr.length && arr[arr.length - 1] < propertie[1]){
			arr.pop();
			count++;
		}
		arr.push(propertie[1])
	}
	return count;
};

console.log(numberOfWeakCharacters(properties = 
[[1,1],[2,1],[2,2],[1,2]]))