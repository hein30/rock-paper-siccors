function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "siccors";
        default:
            return "Unknown";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            return (`You tie! Your choice (${playerSelection}) ties with computer selection (${computerSelection}).`);
        }

        if (computerSelection === "paper") {
            return (`You lose! Your choice (${playerSelection}) loses to with computer selection (${computerSelection}).`);
        }

        if (computerSelection === "siccors") {
            return (`You win! Your choice (${playerSelection}) beats computer selection (${computerSelection}).`);
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return (`You win! Your choice (${playerSelection}) beats computer selection (${computerSelection}).`);
        }

        if (computerSelection === "paper") {
            return (`You tie! Your choice (${playerSelection}) ties with computer selection (${computerSelection}).`);
        }

        if (computerSelection === "siccors") {
            return (`You lose! Your choice (${playerSelection}) loses to with computer selection (${computerSelection}).`);
        }
    }

    if (playerSelection.toLowerCase() === "siccors") {
        if (computerSelection === "rock") {
            return (`You lose! Your choice (${playerSelection}) loses to with computer selection (${computerSelection}).`);
        }

        if (computerSelection === "paper") {
            return (`You win! Your choice (${playerSelection}) beats computer selection (${computerSelection}).`);
        }

        if (computerSelection === "siccors") {
            return (`You tie! Your choice (${playerSelection}) ties with computer selection (${computerSelection}).`);
        }
    }
}

const playerChoice = document.getElementsByName('playerChoice')[0];
const playButton = document.querySelector("button");
const outputParagraph = document.querySelector('body p');

playButton.addEventListener("click", playGame);

function playGame() {
    const output = playRound(playerChoice.value, getComputerChoice());
    outputParagraph.textContent = output;
}