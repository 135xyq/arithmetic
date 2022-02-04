/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
	let count = 0;
	let maxLen = 0;
	let temp = null;
	rectangles.forEach(item=>{
		temp = Math.min(...item);
		if(temp > maxLen){
			maxLen = temp;
			count = 1;
		}else if(temp === maxLen){
			count++;
		}
	})
	return count;
};

console.log(countGoodRectangles(rectangles = [[2,3],[3,7],[4,3],[3,7]]))