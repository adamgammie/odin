function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!")
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors");
    } else if ((playerSelection === "rock" && computerSelection === "paper")) {
        return ("You lose! Paper beats rock");
    } else if ((playerSelection === "paper" && computerSelection === "rock")) {
        return ("You win! Paper beats rock");
    } else if ((playerSelection === "paper" && computerSelection === "scissors")) {
        return ("You lose! Scissors beat paper");
    } else if ((playerSelection === "scissors" && computerSelection === "paper")) {
        return ("You win! Scissors beat paper");
    } else if ((playerSelection === "scissors" && computerSelection === "rock")) {
        return ("You lose! Rocks beats scissors");
    }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Choose your weapon");
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));