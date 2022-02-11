/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
	let length = nums.length;
	if(k === 1){
		return 0;
	}else{
		let min = 100000;
		nums.sort((a,b)=>a-b);
		for(let i = 0; i < length-k+1; i++){
			if(nums[i+k-1] - nums[i] < min){
				min = nums[i+k-1] - nums[i];
			}
		}
		return min;
	}
};

console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918],6))