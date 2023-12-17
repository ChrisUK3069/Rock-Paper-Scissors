

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

function begin(playerSelection) {
    console.log(" ** Welcome to Rock Paper Scissors! **  ");
    const results = document.querySelector("#results");
    const scores = document.querySelector("#scores");
    const winner = document.querySelector("#winner");
    
    //for (let step = 1; step < 6; step++) { remove logic to play 5 rounds
        //playerSelection = prompt("Please enter rock, paper or scissors: ");
        //playerSelection = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();
        console.log("Round:" , game()); // + step CODE FOR LOOP
        console.log(" - User: " + userScore + ", Computer: " + computerScore)
    //}

    if (userScore > computerScore) {
            console.log("You win, earnt 1 point.");
            results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You win, earnt 1 point.`;
        } else if (computerScore > userScore) {
            console.log("You lost, please try again.")
            results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You lost, try again.`;
        } else {
            console.log("Scores are tied, please try again.")
            results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  It's a tie, try again.`;
         }

    scores.textContent = `Running score, your points : ` + userScore + `
                        Opponents points ` + computerScore;

    if (userScore === 5) {
         winner.textContent = "5 Points earned, you have won the game!"
    } else if (computerScore === 5) {
         winner.textContent = "Opponent reaches 5 points, Player Loses."
    }
                        



}





const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", function ()  {
    playerSelection = "rock";
    begin(playerSelection);
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", function ()  {
    playerSelection = "paper";
    begin(playerSelection);
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", function () {
    playerSelection = "scissors";
    begin(playerSelection);
});