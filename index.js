//computerPlay function

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random()*3);
    return choices[result];
}
//declare score values

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//playRound() function

function playRound() {

    let playerSelection = prompt("Pick one: Rock, Paper or Scissors");
    let computerSelection = computerPlay();
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

        if (ps === cs) {
            return "Tie";
        } else if (ps === "rock") {
            if (cs === "paper") {
                console.log("You lost. Paper beats Rock");
                return computerScore++, rounds++;
            } else if (cs === "scissors") {
                console.log("You Won. Rock wins over Scissors");
                return playerScore++, rounds++;
            }
        } else if (ps === "paper") {
            if (cs === "rock") {
                console.log("You Win. Paper wins over Rock");
                return playerScore++, rounds++;
            } else if (cs === "scissors") {
                console.log("You Lost, Scissors wins over Paper");
                return computerScore++, rounds++;
            }
        } else if (ps === "scissors") {
            if (cs === "rock") {
                console.log("You Lost. Rock Wins over Scissors");
                return computerScore++, rounds++; 
            } else if (cs === "paper") {
                console.log("You Won! Scissors wins over Paper");
                return playerScore++, rounds++;
            }
        }
}


//Game function needs to have som source of counter to limit when it reaches 5 games. Can I use a For loop?
//Syntax:
//for (let i = 0; i > rounds; i++) {
    //i++;
//}

function game() {

    for (let i = 1; i <= 6; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        return "You've Won!";
    } else {
        return "You've lost!";
    }
}