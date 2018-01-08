/* 

Tic tac toe

Classes: Board

Helpers: getNextMove, hasPlayerWon, isMoveValid, displayBoard

prompt alternating players for inputs
	validate their move - if not valid, ask them to redo
	check for win condition
		if win condition reached, announce winner and restart

*/

class Board {
  constructor () {
  	// create 3x3 board
  	this.board = new Array(3).fill(new Array(3).fill(0));
  }
}

const board = new Board();

// console.log(JSON.stringify(board, null, 2));