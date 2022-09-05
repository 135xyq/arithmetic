/**https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2f9gg/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for(let i =0 ; i < 9;i++){
        let set1 = new Set();
        let set2 = new Set();
        for(let j= 0;j < 9;j++){
            if(set1.has(board[i][j])){
                return false;
            }
            if(board[i][j] !=='.'){
                set1.add(board[i][j])
            }
            if(set2.has(board[j][i])){
                return false;
            }
            if(board[j][i] !=='.'){
                set2.add(board[j][i])
            }
        }
    }
    for(let i =0 ; i < 9;i+=3){
        for(let j= 0;j < 9;j+=3){
            let set = new Set();
            for(let m = 0;m<3;m++){
                for(let n=0; n <3;n++){
                    if(set.has(board[i+m][j+n])){
                        return false;
                    }
                    if(board[i+m][j+n] !=='.'){
                        set.add(board[i+m][j+n])
                    }
                }
            }
        }
    }
    return true
};

console.log(
	isValidSudoku([["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
)
);
