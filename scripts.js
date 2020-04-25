// A game of rock paper scissors vs the computer. This is version 2, refactored for a front end display, not just the console.

// Global variable declarations for score tracking. These are updated from within playRound()
const humanBoard = document.querySelector('#pp')
const robotBoard = document.querySelector('#cp')

let humanScore = 0;
let robotScore = 0;

const matchLength = 5;

const messageBoard = document.querySelector('#feedback')
const playButton = document.querySelector('#reset');
playButton.addEventListener('click', function(){
    playMatch()
});

// Event listeners for each of the buttons
const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function(){
    playRound('scissors', computerPlay())
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function(){
    playRound('paper', computerPlay())
});

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', function(){
    playRound('rock', computerPlay())
});


// Calls playRound with the selected button as player input
function playMatch()
{
    // Reset scores etc for a new match
    humanScore = 0;
    robotScore = 0;
    robotBoard.textContent = robotScore;
    humanBoard.textContent = humanScore;
    messageBoard.textContent = "Choose your fighter!"

    // Re-enables buttons after a reset
    const weapons = document.querySelectorAll('.weapon');
    weapons.forEach((button) =>{
        button.disabled = false;
    })
}

// Plays a single round of RPS and returns the result to a global variable, then updates the html
function playRound(playerSelection, computerSelection) 
{
    let result = getWinner(playerSelection, computerSelection) 

    if (result == 1)
    {
        humanScore++;
        humanBoard.textContent = humanScore;

        if(humanScore >= matchLength)
        {
            messageBoard.textContent = "You won the match!"
            endRound();
            return; 
        }
        return;
    }
    else if (result == 2)
    {
        robotScore++;
        robotBoard.textContent = robotScore;

        if(robotScore >= matchLength)
        {
            messageBoard.textContent = "You lost the match!"
            endRound();
            return; 
        }
        return;
    }   
}

// Picks a random move for the computer and returns it as a string
function computerPlay()
{
    let weapon = ["rock", "paper", "scissors"]
    let compChoice = weapon[Math.floor(Math.random() * weapon.length)];
    return compChoice; 
    // Code for choosing a random number taken from 
    // https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
}

// Determines winner based on RPS logic. Returns 1, 2, or 3 for player win, player loss or draw respectively
function getWinner(player, computer)
{
    const win = `You won! ${player} beats ${computer}!`
    const loss = `You lost! ${computer} beats ${player}!`

    if (player == computer)
    {
        messageBoard.textContent = "Draw!";
        return 3;
    }
    else if (player == 'rock')
    {
        if (computer == 'scissors')
        {
            messageBoard.textContent = win;
            return 1;
        }
        else 
        {
            messageBoard.textContent = loss;
            return 2;
        }
    }
    else if (player == 'scissors')
    {
        if (computer == 'paper')
        {
            messageBoard.textContent = win;
            return 1;
        }
        else 
        {
            messageBoard.textContent = loss;
            return 2;
        }
    }
    else 
    {
        if (computer == 'rock')
        {
            messageBoard.textContent = win;
            return 1;
        }
        else 
        {
            messageBoard.textContent = loss;
            return 2;
        }
    }
}

// If max wins are reached disables player input
function endRound()
{
    const weapons = document.querySelectorAll('.weapon');
    weapons.forEach((button) =>{
        button.disabled = true;
    })
}

playMatch()