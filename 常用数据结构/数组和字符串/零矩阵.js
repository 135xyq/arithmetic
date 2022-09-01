/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const set = new Set();
    const M =  matrix.length;
    const N = matrix[0].length;
    for(let i = 0 ; i < M;i++){
        let flag = false;
        for(let j= 0 ;j < N;j++){
            if(matrix[i][j] === 0){
                set.add(j);
                flag = true;
            }
        }
        if(flag){
            matrix[i] = new Array(N).fill(0);
        }
    }
    for (const item of set) {
        for(let i = 0  ; i < M;i++){
            matrix[i][item]= 0;
        }
    }
};

console.log(
	setZeroes([
		[0, 1, 2, 0],
		[3, 4, 5, 2],
		[1, 3, 1, 5],
	])
);
