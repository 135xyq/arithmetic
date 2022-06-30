/**https://leetcode.cn/problems/prime-arrangements/
 * @param {number} n
 * @return {number}
 */
 var numPrimeArrangements = function(n) {
    let count = 0 ;//质数的个数
    for(let i = 2 ;i <= n;i++){
        let j;
        for(j = 2;j<i;j++){
            if(i % j === 0){
                break;
            }
        }
        if(j === i){
            count++;
        }
    }
    if(count === 0){
        return n;
    }else{
        let result = 1;
        const MOD = 10**9+7;
        for(let i = 1;i <= count;i++){
            result = (result *i)% MOD;
        }
        for(let i = 1;i <=n-count;i++){
            result = (result *i)% MOD;
        }
        return result;
    }
};

console.log(numPrimeArrangements(7))