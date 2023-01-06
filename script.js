// Create a function that gets the computers choice
function getComputerChoice() {
    // Random number between 1 and 3 (will actually be between 0 and 2)
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerChoice = "Rock";
    } else if (randomNumber == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    // return either "Rock", "Paper", or "Scissors"
    return computerChoice;
}

// Create a function that plays one round of Rock Paper Scissors
// The function should take two values 1) playerSelection and 2) computerSelection
function playRound(playerSelection, computerSelection) {
    let roundResult = "";
    // Ensure all case variations of player input are accepted
    // Logic for when the player has selected "Rock"
    while (playerSelection == "0") { 
        if (computerSelection == "Rock") {
            roundResult = "It is a tie!";
        } else if (computerSelection == "Paper") {
            roundResult = "You Loose! Paper beats Rock";
        } else {
            roundResult = "You Win! Rock beats Scissors";
        }
        break;
    }
    // Logic for when the player has selected "Paper"
    while (playerSelection == "1") {
        if (computerSelection == "Rock") {
            roundResult = "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            roundResult = "It is a tie!";
        } else {
            roundResult = "You Loose! Scissors beat Paper";
        }
        break;
    }
    // Logic for when the play has selected "Scissors"
    while (playerSelection == "2") {
        if (computerSelection == "Rock") {
            roundResult = "You Loose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            roundResult = "You Win! Scissors beat Paper";
        } else {
            roundResult = "It is a tie!";
        }
        break;
    }
    // return a statement stating the result
    return roundResult;
}

// Create a function that determines if there has been a final winner
function checkWinner(playerWinCount, computerWinCount) {
    if (playerWinCount > computerWinCount) {
        //console.log("You won the best of 5 rounds!");
        return "You won the best of 5 rounds!";
    } else (playerWinCount < computerWinCount)
        //console.log("The computer won the best of 5 rounds!");
        return "The computer won the best of 5 rounds!";
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