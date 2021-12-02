var longestCommonPrefix = function(strs) {
    let first = strs[0];
    let result = "";
    let l = first.length;
    strs.forEach(item => {
        result = "";
        for (let i = 0; i < l; i++) {
            if (first[i] === item[i]) {
                result = result + first[i];
            } else {
                l = i;
                break;
            }
        }
    })
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "floght"]));