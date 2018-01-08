

// Helpers: getNextMove, hasPlayerWon, isMoveValid, displayBoard



const displayBoard = (board) => {
	let table = '';
	for (let i = 0; i < board.length; i++) {
		// print row of board
		table += `${JSON.stringify(board[i])}\n`;
	}
	return table;
};