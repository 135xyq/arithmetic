/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
	const index = word.indexOf(ch);
	let str = '';
	if(index === -1){
		return word;
	}else{
		for(let i = 0;i<=index;i++){
			str += word[index -i]
		}
		return str + word.slice(index + 1);
	}
};


/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
	const index = word.indexOf(ch);
	if(index === -1){
		return word;
	}else{
		const arr =  word.split('');
		const arr1 = arr.splice(index+1)
		const temp = arr.splice(0,index+1).reverse()
		return temp.join('') + arr1.join('')
	}
};


console.log(reversePrefix(word = "abcdefd", ch = "d"))