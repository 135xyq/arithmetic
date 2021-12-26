/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
	let map = new Map();
	for(let i = 1;i<=n;i++){
		map.set(i,0);
	}
	for(let i =0;i<trust.length;i++){
		if(map.has(trust[i][0])){
			map.delete(trust[i][0])
		}
	}
	if(map.size === 0){
		return -1;
	}else{
		for (const key of map.keys()){
			let count=0;
			trust.forEach(item=>{
				if(item[1] === key){
					count++;
				}
			})
			console.log(count)
			if(count === n-1){
				return key;
			}
		}
		return -1;
	}
};




/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
	let input = new Array(n+1).fill(0);
	let output= new Array(n+1).fill(0);

	for(let i=0;i<trust.length;i++){
		input[trust[i][1]]++;
		output[trust[i][0]]++;
	}
	for(let i =1;i<=n;i++){
		if(input[i] === n-1 && output[i] === 0){
			return i;
		}
	}
	return -1;
};
console.log(findJudge(4,
[[1,3],[1,4],[2,3],[2,4],[4,3]]))