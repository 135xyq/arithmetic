/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let result = 1;
    if(n ===0 ){
        return 1;
    }else if(n < 0){
        for(let i = 0 ;i < -n;i++){
            result *= (1/x);
        }
    }else{
        for(let i = 0 ;i < n;i++){
            result *= x;
        }
    }
    return result;
};


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    function quick(n){
        if(n===0){
            return 1.0;
        }
        let y = quick(Math.floor(n /2));
        return (n&1)=== 0 ? y * y : y*y*x
    }
    return n >=0 ? quick(n) :1.0 /quick(-n)
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    function quick(n){
        let res = 1.0;
        let temp = x;
        while(n > 0){
            if(n % 2 === 1){
                res *= temp;
            }
            temp *= temp;
            n = Math.floor(n / 2)
        }
        return res;
    }
    return n >=0 ? quick(n) :1.0 /quick(-n)
};



console.log(myPow(2.00000,10))