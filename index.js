//computerPlay function

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random()*3);
    return choices[result];
}

function playRound() {

    let playerSelection = prompt("Pick one: Rock, Paper or Scissors");
    let computerSelection = computerPlay();
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === cs) {
        return "It's a Tie";
    } else if (ps === "rock") {
        if (cs === "paper") {
            return "You lost. Paper Beats Rock";
        } else if (cs === "scissors") {
            return "You Won, Rock wins over Scissors";
        }

    } else if (ps === "paper") {
        if (cs === "rock") {
            return "You win. Paper Wins over Rock";
        } else if (cs === "scissors") {
            return "You lost, scissors wins over paper"
        }
    } else if (ps === "scissors") {
        if (cs === "rock") {
            return "You lost. Rock Wins over Scissors"; 
        } else if (cs === "paper") {
            return "You won. Scissors win over Paper"
        }
    }

}

console.log(playRound());

