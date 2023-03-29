let computerScore = 0;
let playerScore = 0;
let roundPlay = 5

function getComputerChoice(){
    let computerHand = ['paper','rock','scissors'];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}