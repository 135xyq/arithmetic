/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
	let XNumber = 0;//X的个数
	let ONumber = 0;//O的个数
	let player1Win = false;
	let player2Win = false;

	// 统计X和O的个数
	for(let i = 0;i<board.length;i++){
		for(let j = 0;j<board[i].length;j++){
			if(board[i].charAt(j) === 'X'){
				XNumber++;
			}else if(board[i].charAt(j) === 'O'){
				ONumber++;
			}
		}
	}
	if(XNumber === ONumber+1 || XNumber === ONumber){
		// 判读是否有玩家获胜
		//判断一行
		for(let i = 0;i<board.length;i++){
			if(board[i][0] === board[i][1] && board[i][1] === board[i][2]){
				if(board[i][0] === 'X'){
					player1Win = true;
				}else if(board[i][0] === 'O'){
					player2Win = true;
				}
			}
		}
		// 判断一列
		for(let i = 0;i<board.length;i++){
			if(board[0][i] === board[1][i] && board[1][i] === board[2][i]){
				if(board[0][i] === 'X'){
					player1Win = true;
				}else if(board[0][i] === 'O'){
					player2Win = true;
				}
			}
		}

		// 判断对角线
		if(board[0][0] === board[1][1] && board[1][1]=== board[2][2]){
			if(board[0][0] === 'X'){
				player1Win = true;
			}else if(board[0][0] === 'O'){
				player2Win = true;
			}
		}

		if(board[0][2] === board[1][1] && board[1][1]=== board[2][0]){
			if(board[0][2] === 'X'){
				player1Win = true;
			}else if(board[0][2] === 'O'){
				player2Win = true;
			}
		}

		// 玩家一玩家二都赢
		if(player1Win && player2Win){
			return false;
		}


		// 玩家一赢，玩家二不赢
		if(player1Win && !player2Win){
			if(XNumber === ONumber + 1){
				return true;
			}else{
				return false;
			}
		}

		// 玩家二赢，玩家一不赢
		if(!player1Win && player2Win){
			if(XNumber === ONumber){
				return true;
			}else{
				return false;
			}
		}

		// 都不赢
		if(!player1Win && !player2Win){
			return true;
		}
	}

	return false;
};

console.log(validTicTacToe(board = ["O  ","   ","   "]))