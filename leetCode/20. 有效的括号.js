/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const length = s.length;
    let arr = [s[0]];
    if (length % 2 !== 0) {
        return false;
    } else {
        for (let i = 1; i < length; i++) {
            if (change(s[i]) === 2 * change(arr[arr.length - 1])) {
                arr.pop()
            } else {
                arr.push(s[i]);
            }
        }
    }
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }

};
const change = function(str) {
    switch (str) {
        case '{':
            return 1;

        case '}':
            return 2;

        case '[':
            return 3;

        case ']':
            return 6;

        case '(':
            return 5;

        case ')':
            return 10;
    }
}

console.log(isValid('()]['))