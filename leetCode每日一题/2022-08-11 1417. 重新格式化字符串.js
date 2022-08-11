/**https://leetcode.cn/problems/reformat-the-string/
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
	let caps = 0,
		nums = 0;
	for (const item of s) {
		if (item >= "0" && item <= "9") {
			nums++;
		} else {
			caps++;
		}
	}
	if (Math.abs(nums - caps) > 1) {
		return "";
	} else {
		const tempArr = s.split("").sort();
		if (nums > caps) {
			let result = [];
            for(let i = 0 ; i < caps;i++){
                result.push(tempArr[i],tempArr[nums+i])
            }
            result.push(tempArr[nums-1])
            return result.join("");
		}else{
            let result = [];
            for(let i = 0 ; i < nums;i++){
                result.push(tempArr[nums+i],tempArr[i])
            }
            if(caps > nums){
                result.push(tempArr[s.length-1])
            }
            return result.join("");
        }
	}
};

console.log(reformat((s = "a0b12cd")));
