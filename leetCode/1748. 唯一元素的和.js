/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
	nums.sort((a,b)=>a-b);
	let sum = 0;
	let i = 0;
	const length = nums.length;

	for(i = 0; i < length; i++) {
		if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1]){
			sum += nums[i];
		}
	}

	return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
	const map = new Map();
	let sum = 0;
	nums.forEach(num=>{
		if(map.has(num)) {
			map.set(num, map.get(num) + 1)
		}
		else {
			map.set(num,1);
		}
	})

	for (const [key,value] of map) {
		if(value == 1) {
			sum += Number(key);
		}
	}

	return sum;
};

console.log(sumOfUnique(nums = [1,2,3,2]))