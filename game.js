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
  	// create 3x3 board of 
  	this.board = new Array(3).fill(new Array(3).fill(' - '));
  }
}

const board = new Board();

// game state


// welcome players

console.log('Welcome to Tic Tac Toe! \nPlayer 1 will have X\'s, and goes first. Player 2 will have O\'s, and will go second.')

let isGameComplete = false;
let currentPlayer = 1;

	// while nobody has won (or a player hasn't selected 'quit') then continue

while (!isGameComplete) {
	// get move from next player
	const nextMove = getNextMove(currentPlayer);
  
  if (nextMove === 'q') {
  	isGameComplete = true;
  	continue;
  }
	// update board with the valid move
	updateBoard(currentPlayer, nextMove);

  // end game if the current player made a move to win
	if (hasPlayerWon(currentPlayer)) {
		console.log(`Congrats to Player ${currentPlayer} for winning!`);
		isGameComplete = true;
	} 
}

console.log('thanks for playing!')

