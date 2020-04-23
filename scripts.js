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


// Plays a single round of RPS and returns the result. 1 = player wins, 2 = players loses
function playRound(playerSelection, computerSelection) 
{
    let result = getWinner(playerSelection, computerSelection) 

    if (result == 1)
    {
    return 1;
    }
    else if (result == 2)
    {
        return 2;
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
    if (player == computer)
    {
        console.log("Draw!")
        return 3;
    }
    else if (player == 'rock')
    {
        if (computer == 'scissors')
        {
            console.log("You won! Rock beats scissors!")
            return 1;
        }
        else 
        {
            console.log("You lost! Paper beats rock!")
            return 2;
        }
    }
    else if (player == 'scissors')
    {
        if (computer == 'paper')
        {
            console.log("You won! scissors beats paper!")
            return 1;
        }
        else 
        {
            console.log("You lost! rock beats scissors!")
            return 2;
        }
    }
    else 
    {
        if (computer == 'rock')
        {
            console.log("You won! paper beats rock!")
            return 1;
        }
        else 
        {
            console.log("You lost! scissors beats paper!")
            return 2;
        }
    }
    
}

 // Deprecated for front end implementation
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