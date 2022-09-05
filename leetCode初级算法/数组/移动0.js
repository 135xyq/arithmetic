/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let length = nums.length;
    let count = 0;
    for(let i = 0 ;i < length-count;){
        if(nums[i] === 0){
            count++;
            nums.splice(i,1);
            nums.push(0)
        }else{
            i++;
        }
    }
    console.log(nums)
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
    let right = 0;
    let left = 0;
    const length = nums.length;
    while(right < length){
        if(nums[right] !==0){
            let temp =nums[right]
            nums[right]= nums[left]
            nums[left] = temp;
            left++;
        }
        right++
    }
};

console.log(moveZeroes([0, 1, 2, 0, 3]));
