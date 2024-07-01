function gameBoard() {
    let board = [['','',''],['','',''],['','','']];
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

    function moveCheck(r, c){
        if(board[r][c] !== ''){
            return false;
        }
        return true;
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

    return {switchPlayer, getCurrentPlayer, moveCheck, playerMove, win, resetBoard};
}

const cells = document.querySelectorAll(".cell");

    // UI
let game = gameBoard();

function handleClick(e) {
    const r = Number(e.target.parentNode.dataset.row);
    const c = Number(e.target.dataset.col);
    
    if(!game.moveCheck(r, c)){
        return;
    }
    let curr = game.getCurrentPlayer();
    console.log(curr);
    const playerSign = document.createElement('p');
    playerSign.textContent = curr;
    e.target.append(playerSign);
    game.playerMove();
}

function initGame(){
    game.resetBoard();
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.addEventListener('click', handleClick)
    });
}

initGame();