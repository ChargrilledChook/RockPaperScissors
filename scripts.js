// A Bo5 game of rock paper scissors vs the computer. This is version 2, refactored for a front end display, not just the console.

// HTML interactivity
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

const humanBoard = document.querySelector('#pp') // Scoreboard and scores are updated from within playRound()
const robotBoard = document.querySelector('#cp')

let humanScore = 0;
let robotScore = 0;

const messageBoard = document.querySelector('#feedback')

// Plays a single round of RPS and returns the result. 1 = player wins, 2 = players loses
function playRound(playerSelection, computerSelection) 
{
    let result = getWinner(playerSelection, computerSelection) 

    if (result == 1)
    {
        humanScore++;
        humanBoard.textContent = humanScore;
        if(humanScore >= 5)
        {
            messageBoard.textContent = "You won the match!"
            return; // Add a reset / end condition
        }
        return;
    }
    else if (result == 2)
    {
        robotScore++;
        robotBoard.textContent = robotScore;
        if(robotScore >= 5)
        {
            messageBoard.textContent = "You lost the match!"
            return; // Add a reset / end condition
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

//  Prompts  the player for input and converts answer to lowercase
function playerPlay()
{
    playerChoice = prompt ("Enter your move: " )
    playerChoice.toLowerCase()
    return playerChoice;
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

 // Deprecated for front end implementation. These features are in the HTML interactivity section.
 // The main  function which controls keeping score, launching rounds, game length and displaying the winner.
 function game()
 {
    let playerScore = 0;
    let computerScore = 0;
    const gameLength = 1;

    for (let i = 0; i < gameLength; i++)
    {
        outcome = playRound(playerPlay(), computerPlay());

        if (outcome == 1)
        {
            playerScore++;
        }
        else if (outcome == 2)
        {
            computerScore++;
        }
    }
    console.log(`You scored ${playerScore}.`)
    console.log(`Computer scored ${computerScore}.`)

    if (playerScore > computerScore)
    {
         console.log("You won!")
    }
    else if (computerScore > playerScore)
    {
         console.log("You lost!")
    }
    else
    {
        console.log("It was a draw!")
    }
}