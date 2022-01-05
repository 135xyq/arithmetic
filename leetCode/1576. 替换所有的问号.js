/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
	let arr = s.split('');
	for(let i = 0;i<arr.length;i++){
		if(arr[i] === '?'){
			if(i === 0){
				if(arr.length === 1){
					arr[i] = 'a';
				}else{
					if(arr[i+1] === '?'){
						arr[i] = 'b';
					}else{
						arr[i] = String.fromCharCode((arr[i+1].charCodeAt() - 97 + 23) % 26 + 97);
					}
					
				}
			}else if(i === arr.length -1){
				arr[i] = String.fromCharCode((arr[i-1].charCodeAt() - 97 + 23) % 26 + 97);
			}else{
				if(String.fromCharCode((arr[i-1].charCodeAt() - 97 + 23) % 26 + 97) === arr[i+1]){
					arr[i] = String.fromCharCode((arr[i+1].charCodeAt() - 97 + 23) % 26 + 97)
				}else{
					arr[i] = String.fromCharCode((arr[i-1].charCodeAt() - 97 + 23) % 26 + 97);
				}
			}
		}
	}
	return arr.join('')

};

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
	const arr = [...s];
	for(let i =0;i<arr.length;i++){
		if(arr[i] === '?'){
			for(let j =0;j<3;j++){
				if ((i > 0 && arr[i - 1] === String.fromCharCode('a'.charCodeAt() + j)) || (i < arr.length - 1 && arr[i + 1] === String.fromCharCode('a'.charCodeAt() + j))) {
                    continue;
                }
                arr[i] = String.fromCharCode('a'.charCodeAt() + j);
                break;
			}
		}
	}
	return arr.join('')
};


console.log(modifyString('??yw?ipkj?'))