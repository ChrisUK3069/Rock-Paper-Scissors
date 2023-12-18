

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
        results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You win, earnt 1 point.`;
            return;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
         userScore = userScore + 1;
         results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You win, earnt 1 point.`;
            return;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore = userScore + 1;
        results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You win, earnt 1 point.`;
            return;
 } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore = computerScore + 1;
    results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You lost, try again.`;
            return;
 } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore = computerScore + 1;
    results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You lost, try again.`;
            return;
 } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore = computerScore + 1;
    results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  You lost, try again.`;
            return;
 } else {
    results.textContent = `You chose ` + playerSelection + 
            `.  Opponent chose ` + computerSelection + 
            `.  It's a tie, try again.`;
            return;
 }
}



    
let playerSelection; 
let computerSelection = getComputerChoice();    // Generates a random number 1-3 and assigns to a string value
let userScore = 0;
let computerScore = 0;

function begin(playerSelection) {

    const results = document.querySelector("#results");
    const scores = document.querySelector("#scores");
    // const winner = document.querySelector("#winner");
    const winner = document.createElement("div");
    winner.id = "theWinner";
    document.body.appendChild(winner);

    //for (let step = 1; step < 6; step++) { remove logic to play 5 rounds
        //playerSelection = prompt("Please enter rock, paper or scissors: ");
        //playerSelection = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

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
    console.log("Rock button clicked");
    playerSelection = "rock";
    begin(playerSelection);
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", function ()  {
    console.log("paper button clicked");
    playerSelection = "paper";
    begin(playerSelection);
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", function () {
    console.log("scissors button clicked");
    playerSelection = "scissors";
    begin(playerSelection);
});