// This is the random choice the computer will make.

function computerPlay() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[(Math.round(Math.random()*2))];
};
//console.log(computerPlay());

// Function that plays a single round.

function playRound(playerSelection, computerSelection) {

    
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }   else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    }   else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }   else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    }    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissor beats Paper";
    }   else if (playerSelection == computerSelection) {
        return "It's a draw";
  }};

// Function to play 5 rounds. However, it only iterates 1 time.

function game() {
    for (let i = 0; i < 5; i++) {
    const ask = prompt("Rock, Paper or Scissors?").toLowerCase();
    const playerSelection = ask;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    };
    
};
console.log(game());


