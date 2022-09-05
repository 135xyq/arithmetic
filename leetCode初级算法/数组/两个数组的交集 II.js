/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2y0c2/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);
	let result = [];
	for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
		if (nums1[i] === nums2[j]) {
			result.push(nums1[i]);
			i++;
			j++;
		} else if (nums1[i] > nums2[j]) {
			j++;
		} else {
			i++;
		}
	}
	return result;
};

/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2y0c2/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	const map = new Map();
    for (const num of nums1) {
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1);
        }
    }
    let result=[];
    for (const num of nums2) {
        if(map.has(num)){
            let count= map.get(num)
            // console.log(num,count)
            if(count > 0){
                result.push(num)
                map.set(num,count-1)
            }
        }
    }
    return result;
};

console.log(intersect((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
