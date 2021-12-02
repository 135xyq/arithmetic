/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length;) {
        for (var j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(i, 1);
                break;
            }
        }
        if (j === i) {
            i++;
        }
    }
    // console.log(nums)
    return nums.length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))