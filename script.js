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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

// Create a function that plays one round of Rock Paper Scissors
// The function should take two values 1) playerSelection and 2) computerSelection
function playRound(playerSelection, computerSelection) {
    // return a statement stating the result
}