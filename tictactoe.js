

const Gameboard = ((doc) => {
    
    let board = ['','','','','','','','',''];
    let gameDivs = doc.querySelectorAll('.letterarea');
  
    const render = () => {
        for (i = 0; i < 9; i++) {
            gameDivs[i].textContent = board[i];
            if (gameDivs[i].textContent == 'x') {
                gameDivs[i].className += ' x';
            }
            else if (gameDivs[i].textContent == 'o') {
                gameDivs[i].className += ' o';
            }
            else if (gameDivs[i].textContent == '') {
                gameDivs[i].className = 'letterarea';
            }
        }
    }


        
    
    return {
        board,
        render,
        gameDivs,
    }
})(document);





const playerMaker = (name, symbol) => {
    const wins = 0;
    if (name != null) {return {
        name,
        symbol,
        wins
    }}
}


const Gameflow = ((doc) => {

    let playerButton = doc.getElementById('namebutton');
    let playersmade = false;
    let newGameButton = doc.getElementById('newGame');
    let gameWinner; 
    let turn = 0;
    
    const createPlayer = (() => {
        playerButton.addEventListener('click', () => {
        if (playersmade == false) {
        let player1NameDiv = doc.getElementById('player1enter');
        let player2NameDiv = doc.getElementById('player2enter');

        if (player1NameDiv.value != '' && player2NameDiv.value != '') { 
                player1Name = player1NameDiv.value;
                player2Name = player2NameDiv.value;       
                player1 = playerMaker(`${player1Name}`, 'x');
                player2 = playerMaker (`${player2Name}`, 'o');
                playersmade = true;
                player1NameDiv.setAttribute('readonly', 'true');
                player2NameDiv.setAttribute('readonly', 'true');
    }
}
})
    })();

    const playerMove = (() => {    
        Gameboard.gameDivs.forEach((div) => {
        div.addEventListener('click', () => {
        if (player1 && player2) {
            if (turn % 2 == 0 && Gameboard.board[`${div.getAttribute('id')}`] == '' && gameWinner == undefined) {
                Gameboard.board[`${div.getAttribute('id')}`] = player1.symbol;
                turn++;
                Gameboard.render();
                console.log(div.id);
                checkWinner(Gameboard.board);      
            }
            else if (Gameboard.board[`${div.getAttribute('id')}`] == '' && gameWinner == undefined) {
                Gameboard.board[`${div.getAttribute('id')}`] = player2.symbol;
                turn++;
                Gameboard.render();
                console.log(div.id);
                checkWinner(Gameboard.board);
            }
        
        }})
    }
    )
    })();

    const checkWinner = (board) => {
        for (i = 0; i < 3; i++) {
            if (board[i] != '' && board[i] == board[i+3] && board[i] == board[i+6]) {
                (board[i] == player1.symbol) ? gameWinner = player1 : gameWinner = player2;
            }
        }
        for (i = 0; i < 7; i += 3) {
            if (board[i] != '' && board[i] == board[i+1] && board[i] == board[i+2]) {
                (board[i] == player1.symbol) ? gameWinner = player1 : gameWinner = player2;
            }
        }
        if (board[0] != '' && board[0] == board[4] && board[0] == board[8]) {
            (board[0] == player1.symbol) ? gameWinner = player1 : gameWinner = player2;
        }
        else if (board[2] != '' && board[2] == board[4] && board[2] == board[6]) {
            (board[2] == player1.symbol) ? gameWinner = player1 : gameWinner = player2;
        }

        else if (turn == 9) {
            gameWinner = 'tie';
        }

        if (gameWinner != undefined) updateScoreboard(gameWinner);
        
        }

        const clearBoard = () => {
            for (i = 0; i < Gameboard.board.length; i++) {
                Gameboard.board[i] = '';
            }
            turn = 0;
            Gameboard.render();
            gameWinner = undefined;
        }

        const updateScoreboard = (gameWinner) => {
            const scoreDiv = doc.createElement('div');
            const scoreArea = doc.querySelector('.scores');


            if (gameWinner == 'tie') {
                scoreDiv.textContent = `This game ended in a tie.`;
                scoreArea.appendChild(scoreDiv);
            }
            else {
                scoreDiv.textContent = `${gameWinner.name} won this game.`;
                scoreArea.appendChild(scoreDiv);
            }
        
        }
        const makeNewGame = (() => {
            newGameButton.addEventListener('click', () => {
            clearBoard();
        })
    })();
    
})(document);

