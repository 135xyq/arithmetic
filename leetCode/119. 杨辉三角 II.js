/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = []; //存放结果

    result.push(1); //第一个特殊处理
    for (let i = 1; i <= rowIndex; i++) {
        let t = 1; //分子
        let b = 1; //分母
        for (let j = 0; j < i; j++) {
            t *= (rowIndex - j);
        }
        for (let j = 1; j <= i; j++) {
            b *= j;
        }


        result.push(t / b);
    }
    return result;
};

console.log(getRow(5))