/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
	// 元素个数不够或多余不能转为
	if(original.length !== m * n){
		return [];
	}


	let result= [];
	for(let i =0 ;i < m ;i++){
		result.push(original.splice(0,n))
	}

	return result;
};


console.log(construct2DArray(original = [1,2,3,4], m = 2, n = 2))