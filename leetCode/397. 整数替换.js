/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let arr = [];
    let sum = 0;
    arr = a(n)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let sum2 = 0;
        if (arr[i] === 1) {
            for (let j = arr.length - 1; j >= 0;) {
                if (arr[j] === 1) {
                    sum2++;
                }
            }
            let arr1 = a(n + 2 ** i - 1);
            let sum1 = 0;
            for (let j = 0; j < arr1.length; j++) {
                if (arr1[j] === 1) {
                    sum1++;
                }
            }
            if (sum1 < sum2) {
                arr = arr1;
            }
        } else {
            j--;
        }
    }
    return sum + arr.length;
};

function a(n) {
    let arr = [];
    while (n > 0) {
        arr.unshift(n % 2);
        n = Math.floor(n / 2);
    }
    return arr;
}

console.log(integerReplacement(8))