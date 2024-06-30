function gameBoard() {
    let gameBoard = [['','',''],['','',''],['','','']];
    const playerX = 'X';
    const playerO = 'O';
    let turnChecker = 0;
    let currentPlayer = 'X';
      
    function switchPlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
      
    function getCurrentPlayer() {
        return currentPlayer;
    }
      
    function playerMove() {
        if(turnChecker < 9){
            switchPlayer();
            won();
            turnChecker++
            if (currentPlayer === 'X') {
            // let move = prompt("Please enter your chosen move:");
            console.log("[] [] []");
            console.log("[] [] []");
            console.log("[] [] []");
            gameBoard[0][1] = 'X';
            return gameBoard;
            } else {
                console.log("[] [] []");
                console.log("[] [] []");
                console.log("[] [] []");
                gameBoard[0][1] = 'O';
                return gameBoard;  
            }} else return 0;
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

    // UI

    let game = gameBoard();