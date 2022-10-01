/**https://leetcode.cn/problems/reformat-phone-number/
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	let arr = number.replace(/\s|-/g, "").split("");
	let result = "";
	const length = arr.length;
	let temp = length % 3;
	let end = '';
	if (temp === 1) {
		let t  = arr.splice(length - temp - 3, 4);
        end = t.slice(0,2).join("") + '-' +  t.slice(2,4).join("")
	}else{
		end = arr.splice(length - temp, temp).join('');
    }
    for(let i = 0; i < arr.length / 3;i++){
        result += arr.slice(i * 3 ,i*3+3).join('') + '-'
    }
    if(end === ''){
        let a = result.split("");
        a.pop();
        return a.join("")
    }else{
        return result + end;
    }
};

console.log(reformatNumber((number =
    "1-23-45 6")));
