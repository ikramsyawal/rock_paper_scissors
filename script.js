let computerScore = 0;
let playerScore = 0;
let roundPlay = 5

function getComputerChoice(){
    let computerHand = ['paper','rock','scissors'];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}
let playerHand = prompt('What is Your hand? please input Text!').toLowerCase();


function round(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        alert(`${computerSelection} vs ${playerSelection}. Its a Tie`);
        computerScore++
        playerScore++
    }else if(computerSelection==='rock' && playerSelection ==='scissors'){
        alert(`${computerSelection} vs ${playerSelection}. Computer WIN`);
        computerScore++
    }else if(computerSelection==='paper' && playerSelection ==='rock'){
        alert(`${computerSelection} vs ${playerSelection}. Computer WIN`);
        computerScore++
    }else if(computerSelection==='scissors' && playerSelection ==='paper'){
        alert(`${computerSelection} vs ${playerSelection}. Computer WIN`);
        computerScore++
    }else{
        alert(`${computerSelection} vs ${playerSelection}. Player WIN`);
        playerScore++
    }
};

for (let i=1; i<=5; i++){
    round(getComputerChoice(),playerHand);
    console.log(playerScore)
    console.log(computerScore)
    if (playerScore === 3){
        alert('player win')
        break
    }else if(computerScore === 3){
        alert('computer win')
        break
    }
    playerHand = prompt('What is Your hand? please input Text!').toLowerCase();

}