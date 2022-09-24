/**https://leetcode.cn/problems/defuse-the-bomb/
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const length = code.length;
    if(k === 0){
        return new Array(length).fill(0)
    }else if(k > 0){
        let sum = 0 ;
        for(let i = 0; i < k; i++) {
            sum += code[i];
        }
        let result = [];
        for(let i =  0 ; i < length ; i++){
            sum =  sum -code[i] + code[(k+i)%length]
            result[i] = sum;
        }
        return result;
    }else{
        let sum = 0 ;
        for(let i = length-1; i >=length+k; i--) {
            sum += code[i];
        }
        let result =[];
        for(let i =  0 ; i < length ; i++){
            result[i] = sum;
            sum = sum + code[i] - code[(length + k+i)%length]
        }
        return result;
    }
};


console.log(decrypt(code = [5,7,1,4], k = 3))