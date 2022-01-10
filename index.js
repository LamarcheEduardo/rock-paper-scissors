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
rock.setAttribute('id','rock');
rock.innerText = "Rock";
options.appendChild(rock);
rock.style.cssText = 'margin: 4px';

const paper = document.createElement('button');
paper.classList.add('paper');
paper.setAttribute('id','paper');
paper.innerText = "Paper";
options.appendChild(paper);
paper.style.cssText = 'margin: 4px';

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.setAttribute('id','scissors');
scissors.innerText = "Scissors";
options.appendChild(scissors);
scissors.style.cssText = 'margin: 4px';

const playerChoice = document.createElement('div');
playerChoice.classList.add('playerChoice');
container.appendChild(playerChoice); //display the player choice result


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => { 
        const result = button.textContent.toLowerCase();
        playerChoice.innerText = `You've picked: ${result}`;
        const computerResult = computerPlay();
        computerChoice.innerText = `Machine picked: ${computerResult}`;
       game(result, computerResult);
    });
});

const computerChoice = document.createElement('div');
computerChoice.classList.add('computerChoice');
container.appendChild(computerChoice); //display the computerPlay function result

const roundPicks = document.createElement('div');
roundPicks.classList.add('roundPicks');
container.appendChild(roundPicks);

//declare score values and rounds (old html)
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//random computer selection
const computerPlay = () => {
    const choices = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random()*3);
    return choices[result];
};

//Play a whole game.
const game = (event, computerResult) => {
        playRound(event, computerResult);
        checkScore();
};

//checking the score if someone wins.

const checkScore = () => {
    if (playerScore === 5) {
        alert("You've won the game!");
    } else if (computerScore === 5) {
        alert("You've lost the game");
    }
};

//playRound function
 
let playRound = (event, computerResult) => {

    let ps = event.toLowerCase();
    let cs = computerResult.toLowerCase();

        if (ps === "rock" && cs === "rock") {
            return roundPicks.innerText = "It's a draw!", rounds++;
        } else if (ps === "rock" && cs === "paper") {
            return roundPicks.innerText = "You've lost. Paper Wins Rock", computerScore++, rounds++;
        } else if (ps === "rock" && cs === "scissors") {
            return roundPicks.innerText = "You win. Rock wins over Scissors", playerScore++, rounds++;
        } else if (ps === "paper" && cs === "paper") {
            return roundPicks.innerText = "It's a draw!", rounds++;
        } else if (ps === "paper" && cs === "rock") {
            return roundPicks.innerText = "You win! Paper Beats Rock", playerScore++, rounds++;
        } else if (ps === "paper" && cs === "scissors") {
            return roundPicks.innerText = "You've lost. Scissors wins over Paper", computerScore++, rounds++;
        } else if (ps === "scissors" && cs === "scissors") {
            return roundPicks.innerText = "It's a draw!", rounds++;
        } else if (ps === "scissors" && cs === "paper") {
            return roundPicks.innerText = "You win. Scissors Wins over Paper", playerScore++, rounds++;
        } else if (ps === "scissors" && cs === "rock") {
            return roundPicks.innerText = "You've lost. Rock wins over Scissors", computerScore++, rounds++;
        }

};


