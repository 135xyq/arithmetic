/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	let result = 0;
	let arr = new Array(n).fill(1);
	for (let i = 2; i <= n; i++) {
        if(arr[i]){
            result++;
        }
        for(let j = i *i ;j <= n; j+=i) {
            arr[j] = 0;
        }
    }
    return result;
};


console.log(countPrimes(10))