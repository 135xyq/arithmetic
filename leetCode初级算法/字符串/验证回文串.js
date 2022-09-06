/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.toLowerCase();
	let left = 0,
		right = s.length - 1;
	while (left < right) {
		while (!((s[left] >= "a" && s[left] <= "z") || (s[left] >= "0" && s[left] <= "9")) && left < right) {
			left++;
		}
		while (!((s[right] >= "a" && s[right] <= "z") || (s[right] >= "0" && s[right] <= "9")) && left < right) {
			right--;
		}
        // console.log(left,right)
		if (s[left] !== s[right]) {
			return false;
		} else {
			left++;
			right--;
		}
	}
	return true;
};


/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let format = s.replace(/[^A-Za-z0-9]/gi,'').toLowerCase().split('');
    return format.join('') === format.reverse().join('')
};


console.log(isPalindrome((s = "0P")));
