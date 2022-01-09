
const computerPlay = () => {
    const choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random()*3);
    return choices[result];
};

//Create Buttons

const container = document.querySelector('#container');

const title = document.createElement('div');
title.classList.add('welcomeMsg');
title.innerHTML = "<h1>Welcome to Rock Paper Scissors</h1> <p>Fight against the machine in order to save humanity</p>";
container.appendChild(title);

const options = document.createElement('div');
options.classList.add('options');
options.innerText = "Select one: ";
container.appendChild(options);
options.style.cssText = 'padding: 16px';

const rock = document.createElement('button');
rock.classList.add('rock');
rock.setAttribute('id','buttons');
rock.innerText = "Rock";
options.appendChild(rock);
rock.style.cssText = 'margin: 4px';

const paper = document.createElement('button');
paper.classList.add('paper');
paper.setAttribute('id','buttons');
paper.innerText = "Paper";
options.appendChild(paper);
paper.style.cssText = 'margin: 4px';

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.setAttribute('id','buttons');
scissors.innerText = "Scissors";
options.appendChild(scissors);
scissors.style.cssText = 'margin: 4px';

const buttons = document.querySelectorAll('button');
let playerSelect = Array.from(buttons).forEach((button) => {
            button.addEventListener('click', () => {
                playerChoice.innerText = "You've selected: " + button.innerText.toLowerCase();
                computerChoice.innerText = "Computer selected: " + computerPlay();
            });
        });

const playerChoice = document.createElement('div');
playerChoice.classList.add('playerChoice');
playerChoice.innerText = "";
container.appendChild(playerChoice);

const computerChoice = document.createElement('div');
computerChoice.classList.add('computerChoice');
container.appendChild(computerChoice);


//declare score values

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//playRound() function

let playRound = () => {

    // let playerSelection = prompt("Pick one: Rock, Paper or Scissors");
    let computerSelection = computerPlay();
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

        if (ps === cs) {
            console.log("Tie");
                return rounds++;
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
};

//Game function needs to have som source of counter to limit when it reaches best of 5 games. Can I use a For loop?
//Syntax:
//for (let i = 0; i > rounds; i++) {
    //i++;
//}

// const checkScore = () => {
//     if (playerScore === 5) {
//         alert("You've won the game!");
//     } else if (computerScore === 5) {
//        alert("You've lost the game");
//     }
// }

// const game = () => {

//     for (let i = 1; i <= 6; i++) {
//         playRound();
//         checkScore();
//     }
// };