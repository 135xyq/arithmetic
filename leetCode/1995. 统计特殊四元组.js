/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
	let count = 0;

	for(let i = 0;i<nums.length-3;i++){
		for(let j = i+1;j<nums.length-2;j++){
			for(let t = j+1;t<nums.length-1;t++){
				for(let l = t+1;l<nums.length;l++){
					if(nums[i] + nums[j] + nums[t] === nums[l]){
						count++;
					}
				}
			}
		}
	}
	return count;
};

console.log(countQuadruplets([28,8,49,85,37,90,20,8]))