
const Gameboard = (() => {
    board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    const updateBoard = (move) => {
        board.push(move);
    }
    
    return {
        updateBoard,
        board
    }
})();


const playerMaker = (name, symbol) => {
    const wins = 0;
    return {
        name,
        symbol,
        wins
    }
}


const Gameflow = (() => {
    const player1 = playerMaker('Bob', 'x');
    const player2 = playerMaker('Joe', 'o');


})();

