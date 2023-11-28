

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper") {
        userScore = userScore + 1;
        return "You have won. paper beats rock.";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
         userScore = userScore + 1;
         return "You have won. rock beats scissors.";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore = userScore + 1;
        return "You have won. scissors beats paper.";
 } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore = computerScore + 1;
    return "You have lost. rock beats scissors.";
 } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore = computerScore + 1;
    return "You have lost. paper beats rock.";
 } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore = computerScore + 1;
    return "You have lost. scissors beats paper.";
 } else {
    return "It is a draw."
 }
}

function game(){
    
        return playRound(playerSelection, computerSelection);
    }

    
let playerSelection;
let computerSelection = getComputerChoice();    // Generates a random number 1-3 and assigns to a string value
let userScore = 0;
let computerScore = 0;

function begin() {
    console.log(" ** Welcome to Rock Paper Scissors! **  ");
    
    for (let step = 1; step < 6; step++) {
        playerSelection = prompt("Please enter rock, paper or scissors: ");
        playerSelection = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();
        console.log("Round:" + step, game());
        console.log(" - User: " + userScore + ", Computer: " + computerScore)
    }

    if (userScore > computerScore) {
            console.log("Congratulations, you won the game!");
        } else if (computerScore > userScore) {
            console.log("You lost the game, please try again.")
        } else {
            console.log("Scores are tied, please try again.")
        }
}

begin();