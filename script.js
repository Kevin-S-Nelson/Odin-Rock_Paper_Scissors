// Create a function that gets the computers choice
function getComputerChoice() {
    // Random number between 1 and 3 (will actually be between 0 and 2)
    let computerChoice;
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
    console.log("The players choice is: " + playerSelection);
    console.log("The computer choice is: " + computerSelection);
    // Logic for when the play has selected rock
    while (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            console.log("It is a tie!");
        } else if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
        } else {
            console.log("You Win! Rock beats Scissors");
        }
        break;
    }
    // Logic for when the player has selected paper
    while (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
        } else if (computerSelection == "Paper") {
            console.log("It is a tie!");
        } else {
            console.log("You Lose! Scissors beat Paper");
        }
        break;
    }
    // Logic for when the play has selected scissors
    while (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
        } else if (computerSelection == "Paper") {
            console.log("You Win! Scissors beat Paper");
        } else {
            console.log("It is a tie!");
        }
        break;
    }
    // return a statement stating the result
}

playRound("Rock", computerSelection);
playRound("Paper", computerSelection);
playRound("Scissors", computerSelection);
