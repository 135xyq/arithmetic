/**https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const length = nums.length;
    if (length <= 2) {
        return nums[0]
    }
    for (let i = 0; i < length; i++) {
        if (map.has(nums[i])) {
            const temp = map.get(nums[i]);
            map.set(nums[i], temp + 1);
            if (temp >= Math.floor(length / 2)) {
                return nums[i];
            }
        } else {
            map.set(nums[i], 1)
        }
    }
};


/**https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)]
};


console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))