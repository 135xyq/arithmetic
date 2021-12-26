/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
	let arr1 = new Array(26).fill(0);

	for (const item of s1){
		arr1[item.charCodeAt() - 97]++;
	}
	
	for(let i = 0;i<=s2.length - s1.length;i++){
		let arr2 = new Array(26).fill(0);

		for(let j = 0;j<s1.length;j++){
			arr2[s2.charCodeAt(i+j) - 97]++;
		}

		let t = 0;
		for(t = 0;t<26;t++){
			if(arr2[t] !== arr1[t]){
				break;
			}
		}

		if(t===26){
			return true;
		}
	}
	return false;
};

console.log(checkInclusion(s1= "ab" ,s2 = "eidboaoo"))