

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