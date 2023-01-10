function getComputerChoice() { // Computers random selection
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerChoice = "Rock";
    } else if (randomNumber == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) { // Play one round
    let roundResult = "";
    while (playerSelection == "0") { // Player chooses "Rock"
        if (computerSelection == "Rock") {
            roundResult = "It is a tie!";
        } else if (computerSelection == "Paper") {
            roundResult = "You Loose! Paper beats Rock";
        } else {
            roundResult = "You Win! Rock beats Scissors";
        }
        break;
    }
    while (playerSelection == "1") { // Player chooses "Paper"
        if (computerSelection == "Rock") {
            roundResult = "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            roundResult = "It is a tie!";
        } else {
            roundResult = "You Loose! Scissors beat Paper";
        }
        break;
    }
    while (playerSelection == "2") { // Player chooses "Scissors"
        if (computerSelection == "Rock") {
            roundResult = "You Loose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            roundResult = "You Win! Scissors beat Paper";
        } else {
            roundResult = "It is a tie!";
        }
        break;
    }
    return roundResult;
}

function checkWinner(playerWinCount, computerWinCount) { // Determine final result
    if (playerWinCount > computerWinCount) {
        return "You won the best of 5 rounds! Want to try again? Select your first move below.";
    } else 
        return "The computer won the best of 5 rounds! Want to try again? Select your first move below.";
}

// Create a function called game() that plays 5 rounds (loop) and identifies the winner
function game() {
    // Variables that will be used in this function
    let playerWinCount = 0;
    let computerWinCount = 0;
    let winCheck = "You Win!";
    let looseCheck = "You Loose!";
    let computerSelection = getComputerChoice();
    let gameOver = "";
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            results.textContent = 'Result: ' + playRound(playerSelection, computerSelection);
            if (playRound(playerSelection, computerSelection).includes(winCheck)) {
                playerWinCount++;
                score.textContent = 'Human: ' + playerWinCount + ' | Computer: ' + computerWinCount;
                if (playerWinCount == 5) {
                    gameOver = checkWinner(playerWinCount, computerWinCount);
                    endGame.textContent = gameOver;
                    playerWinCount = 0;
                    computerWinCount = 0;
                } else endGame.textContent = "";
                computerSelection = getComputerChoice(); // Creates new random result for computers next choice
            } else if (playRound(playerSelection, computerSelection).includes(looseCheck)){
                computerWinCount++; 
                score.textContent = 'Human: ' + playerWinCount + ' | Computer: ' + computerWinCount;
                if (computerWinCount == 5) {
                    gameOver = checkWinner(playerWinCount, computerWinCount);
                    endGame.textContent = gameOver;
                    playerWinCount = 0;
                    computerWinCount = 0;
                } else endGame.textContent = "";
                computerSelection = getComputerChoice();
            } else {
                playerWinCount;
                computerWinCount;
                score.textContent = 'Human: ' + playerWinCount + ' | Computer: ' + computerWinCount;
                computerSelection = getComputerChoice();
                endGame.textContent = "";
            }
        });
    });
}

game();