/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
	const temp = [...score];//得到一个为新数组
	temp.sort((a,b)=>b-a);//将数组降序排列，得到正确的名次
	let result = [];
	score.forEach(item=>{
		const index = temp.indexOf(item);//得到当前元素的排名
		switch (index){
			case 0:
				result.push('Gold Medal');
				break;
			case 1:
				result.push('Silver Medal');
				break;
			case 2:
				result.push('Bronze Medal');
				break;
			default:
				result.push(`${index+1}`)
		}
		
	})
	return result;
	
};

console.log(findRelativeRanks(score = [5,4,3,2,1]));