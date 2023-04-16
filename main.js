"use strict";
const userPrompt = require("prompt-sync")();
let playerScore = 0;
let computerScore = 0;
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
};
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `'Tie. \nYou:${playerScore} Computer:${computerScore}'`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return `"You've lost! Paper beats rock. \nYou:${playerScore} Computer:${computerScore}"`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return `"You've won! Rock beats scissors. \nYou:${playerScore} Computer:${computerScore}"`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return `"You've won! Paper beats rock. \nYou:${playerScore} Computer:${computerScore}"`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return `"You've lost! Scissors beats rock. \nYou:${playerScore} Computer:${computerScore}"`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return `"You've lost! Rock beats scissors. \nYou:${playerScore} Computer:${computerScore}"`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `"You've won! Scissors beats paper. \nYou:${playerScore} Computer:${computerScore}"`;
    } else {
        return 'Error, Make your choice: Rock, Paper or Scissors?';
    }
};
const game = () => {
    for (let counter = 5; counter >= 0; counter--) {
        let playerSelection = userPrompt(`Rock, Paper, Scissors game! ${counter} rounds left! Make your choice: Rock, Paper or Scissors: `);
        playerSelection = playerSelection.toLowerCase();
        getComputerChoice();
        alert(playRound(playerSelection, getComputerChoice()));
   }
   if (playerScore === computerScore) {
    alert('Tie');
   } else if (playerScore > computerScore) {
    alert (`"You've won! Congratulations!\nYou:${playerScore} Computer:${computerScore}"`);
   } else if (playerScore < computerScore) {
    alert (`"Game over, you've lost.\nYou:${playerScore} Computer:${computerScore}"`)
   }
}
