function maxProduct(words) {
    let i, j;
    let max = 0;
    for (i = 0; i < words.length; i++) {
        for (j = i + 1; j < words.length; j++) {
            let flag = 0; //表示有无重复
            const set = new Set(words[i]);
            const set1 = new Set(words[j]);
            for (const item of set1) {
                if (set.has(item)) {
                    flag = 1;
                    break;
                }
            }
            if (!flag) {
                if ((words[i].length * words[j].length) > max) {
                    max = words[i].length * words[j].length
                }
            }
        }
    }
    return max;
}

console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]))