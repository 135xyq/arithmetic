/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
	const array = edges.toString().split(',');
	const n = edges.length;
	let map = new Map();
	for (const item of array) {
		if(map.has(item)) {
			if(map.get(item) === n - 1 && item !== ','){
				return item;
			}else{
				map.set(item,map.get(item) + 1);
			}
			
		}else {
			map.set(item,1);
		}
	}
};


/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
	if(edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
		return edges[0][0];
	}else {
		return edges[0][1]
	}
};

console.log(findCenter(edges = [[1,10],[10,2],[3,10],[10,4],[10,5],[10,6],[10,7],[8,10],[9,10],[10,11],[12,10]]))