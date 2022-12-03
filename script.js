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

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

// Create a function that plays one round of Rock Paper Scissors
// The function should take two values 1) playerSelection and 2) computerSelection
function playRound(playerSelection, computerSelection) {
    let roundResult = "";
    // Ensure all case variations of player input are accepted
    // Logic for when the player has selected rock
    while (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "Rock") {
            roundResult = "It is a tie!";
        } else if (computerSelection == "Paper") {
            roundResult = "You Lose! Paper beats Rock";
        } else {
            roundResult = "You Win! Rock beats Scissors";
        }
        break;
    }
    // Logic for when the player has selected paper
    while (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "Rock") {
            roundResult = "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            roundResult = "It is a tie!";
        } else {
            roundResult = "You Lose! Scissors beat Paper";
        }
        break;
    }
    // Logic for when the play has selected scissors
    while (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == "Rock") {
            roundResult = "You Lose! Rock beats Scissors";
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

// Create a function called game() that plays 5 rounds (loop) and identifies the winner
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log(i);
    }
}

game();