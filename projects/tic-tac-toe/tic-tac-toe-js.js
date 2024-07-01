function gameBoard() {
    let gameBoard = [['','',''],['','',''],['','','']];
    let turnChecker = 0;
    let currentPlayer = 'X';
      
    function switchPlayer() {
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        return currentPlayer;
    }
      
    function getCurrentPlayer() {
        return currentPlayer;
    }
      
    function playerMove() {
        if(turnChecker < 9){
            switchPlayer();
            win();
            turnChecker++
        }
    }
        
    function win() {
        for(let i = 0; i < 3; i++){
           let flag = true;
            for(let j = 0; j < 3; j++){
                if(board[j][i] !== currentPlayer){
                    flag = false;
                }
            }
            if(flag){
                return true;
            }
        }
        // for diagonal wins
        if(board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer){
            return true;
        }
        if(board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer){
            return true;
        }
        return false;
    }

    function resetBoard() {
        gameBoard = [['','',''],['','',''],['','','']];
    }

    return {switchPlayer, getCurrentPlayer, playerMove, win, resetBoard};
}

const cells = document.querySelectorAll(".cell");

    // UI
let game = gameBoard();

function handleClick(e) {
    let curr = game.getCurrentPlayer();
    console.log(curr);
    const playerSign = document.createElement('p');
    playerSign.textContent = curr;
    e.target.append(playerSign);
    game.switchPlayer();
}

function initGame(){
    game.resetBoard();
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.addEventListener('click', handleClick)
    });
}

initGame();