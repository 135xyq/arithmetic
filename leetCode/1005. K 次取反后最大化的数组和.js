/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 统计负数的个数
var largestSumAfterKNegations = function(nums, k) {
	let count = 0;//负数的个数
	let maxSum = 0;//可能的最大和
	let sum = 0;//原来的
	nums.sort((a,b)=>a-b);
	nums.forEach(item=>{
		if(item < 0){
			count ++;
		}
		sum += item;
	})
	if(k<=count){
		maxSum = sum;
		for(let i =0;i<k;i++){
			maxSum+=(-nums[i]*2);
		}
		return maxSum;
	}else if(k>count){
		if(!count){
			if(k%2===0){
				return sum;
			}else{
				return sum-2*nums[0];
			}
		}else{
			let temp  = k-count;
			maxSum = sum;
			for(let i =0;i<count;i++){
				maxSum+=(-nums[i]*2);
			}
			if(temp%2===0){
				return maxSum;
			}else{
				if(count === nums.length){
					return maxSum + 2*(nums[nums.length-1])
				}else{
					return maxSum - 2*Math.min(Math.abs(nums[count-1]),Math.abs(nums[count]))
				}
			}
		}
	}
};

console.log(largestSumAfterKNegations([-4,-2,-3],
4))