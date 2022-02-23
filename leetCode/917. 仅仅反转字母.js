/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const chars = s.split('')
    for(let l = 0, r = s.length - 1; l < r;) {
        while(l < r && !((chars[l] >= 'a' && chars[l] <= 'z') || (chars[l] >= 'A' && chars[l] <= 'Z')))
            l++
        while(r > l && !((chars[r] >= 'a' && chars[r] <= 'z') || (chars[r] >= 'A' && chars[r] <= 'Z')))
            r--
        if(l < r) {
            const tmp = chars[l]
            chars[l++] = chars[r]
            chars[r--] = tmp
        }
    }
    return chars.join("")
};

console.log(reverseOnlyLetters(s = "a-bC-dEf-ghIj"))