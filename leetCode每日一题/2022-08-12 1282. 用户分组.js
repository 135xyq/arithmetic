/**https://leetcode.cn/problems/group-the-people-given-the-group-size-they-belong-to/
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
	let doubleArr = new Array(500).fill([]);
	for (let i = 0; i < groupSizes.length; i++) {
		doubleArr[groupSizes[i]] = [...doubleArr[groupSizes[i]], i];
	}
    let result = [];
	for(let i = 1; i < doubleArr.length;i++){
        if(doubleArr[i].length === 0){
            continue;
        }
        console.log(doubleArr[i])
        let n = 0;
        while(n < doubleArr[i].length){
            // console.log(doubleArr[i],i,n,doubleArr[i].slice(n,i))
            result.push(doubleArr[i].slice(n,i+n));
            n+=i;
        }
    }
    return result;
};



console.log(groupThePeople((groupSizes = [3, 3, 3, 3, 3, 1, 3])));
