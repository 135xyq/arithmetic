/**https://leetcode.cn/problems/find-k-closest-elements/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function (arr, x, k) {
	let index = 0;
    let i=0;
	for (i=0; i < arr.length; i++) {
		if (arr[i] >= k) {
			index = i;
			break;
		}
	}
    if(i === arr.length){
        index =arr.length-1;
    }
    console.log(index)
	if (index === 0) {
		return arr.slice(0, x);
	} else if (index === arr.length) {
		return arr.slice(arr.length - x);
	} else {
		let left = index - 1;
		let right = index;
		let temp = x;
		let result = [];
		while (left !== -1 && right !== arr.length && temp !== 0) {
			if (Math.abs(arr[left] - k) <= Math.abs(arr[right] - k)) {
				result.push(arr[left]);
				left--;
			} else {
				result.push(arr[right]);
				right++;
			}
			temp--;
		}
		if (temp === 0) {
			return result.sort((a, b) => a - b);
		} else {
			if (left === -1) {
				result = arr.slice(0, x);
			} else {
				result = arr.slice(arr.length - x);
			}
		}
		return result;
	}
};



/**https://leetcode.cn/problems/find-k-closest-elements/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
	const list = [...arr]
    list.sort((a,b)=>{
        if(Math.abs(a-x) !== Math.abs(b-x)){
            return Math.abs(a-x) - Math.abs(b-x)
        }else{
            return a-b;
        }
    })

    const result=list.slice(0,k)
    return result.sort((a,b)=>a-b)
};


console.log(findClosestElements([3, 5, 8, 10], 2, 15));
