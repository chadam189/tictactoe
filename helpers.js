

// Helpers: getNextMove, hasPlayerWon, isMoveValid, displayBoard



const displayBoard = (board) => {
  let table = '';
  for (let i = 0; i < board.board.length; i++) {
    // print row of board
    table += JSON.stringify(board.board[i]);
    table += '\n ';
  }
  return table;
};

const getNexMove = (playerNumber) => {
  let move = prompt(`Player ${player}, please select the spot of your next move (or put \'q\' to quit)`);
  // check whether move is valid

  while (!isMoveValid(board, move)) {
  	move = prompt(`That is an invalid move; another piece is in that spot. Please select a valid spot for your next move (or put \'q\' to quit)`);
  }
  // return valid move
  return move;
};

const updateBoard = (player, spot) => {

	// change spot on board from ' - ' to either X (for Player 1) or ' O  ' for Player 2

	
}

const hasPlayerWon = (board, player) => {

	// player param is to otimize searches to only check if the player who just placed a piece won; no need to check if their opponent won this turn

	// return true if yes
}

const isMoveValid = (board, spot) => {
	// check to see if that spot is qual to: ' - '
	// if so, then we're good to place the piece
	// if not, then that means another piece is already there - doesn't matter if it belons to the player or their opponent
};