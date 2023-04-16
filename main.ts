const userPrompt = require("prompt-sync")();
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
};

const playRound = (playerSelection: string, computerSelection: string) => {
    switch (true) {
        case playerSelection === computerSelection:
            return `Tie. \nYou: ${playerScore} Computer: ${computerScore}`;
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore += 1;
            return `You've lost! Paper beats rock. \nYou: ${playerScore} Computer: ${computerScore}`;
        case playerSelection === "rock" && computerSelection === "scissors":
            playerScore += 1;
            return `You've won! Rock beats scissors. \nYou: ${playerScore} Computer: ${computerScore}`;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore += 1;
            return `You've won! Paper beats rock. \nYou: ${playerScore} Computer: ${computerScore}`;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore += 1;
            return `You've lost! Scissors beats rock. \nYou: ${playerScore} Computer: ${computerScore}`;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore += 1;
            return `You've lost! Rock beats scissors. \nYou: ${playerScore} Computer: ${computerScore}`;
        case playerSelection === "scissors" && computerSelection === "paper":
            return `You've won! Scissors beats paper. \nYou: ${playerScore} Computer: ${computerScore}`;
        default:
            return "Error, Make your choice: Rock, Paper or Scissors?";
    }
};

const game = () => {
    for (let counter = 5; counter >= 0; counter--) {
        let playerSelection = userPrompt(
            `Rock, Paper, Scissors game! ${counter} rounds left! Make your choice: Rock, Paper or Scissors: `
        );
        playerSelection = playerSelection.toLowerCase();
        getComputerChoice();
        console.log(playRound(playerSelection, getComputerChoice()));
    }

    if (playerScore === computerScore) {
        console.log(`Tie`);
    } else if (playerScore > computerScore) {
        console.log(
            `Game over, you've won! Congratulations!\nYou: ${playerScore} Computer: ${computerScore}`
        );
    } else if (playerScore < computerScore) {
        console.log(
            `Game over, you've lost.\nYou: ${playerScore} Computer: ${computerScore}`
        );
    }
    playerScore = 0;
    computerScore = 0;
};

while (true) {
    game();
    const again = userPrompt(`Play again? (y/n): `);
    if (again.toLowerCase() === "n") {
        break;
    }
}
