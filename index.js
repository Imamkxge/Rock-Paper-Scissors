function computerPlay() {
    base = Math.random() * 100;
    if (base <= 34) {
        return "rock"
    } else if (base <= 68) {
        return "scissor"
    } else {
        return "paper";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "TIE!"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
        return "You Win! Rock beats Scissor!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock!"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "TIE!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "You Lose! Scissor beats Paper!"
    }
    else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissor"
    }
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "You Win! Scissor beats Paper!"
    }
    else if (playerSelection == "scissor" && computerSelection == "scissor") {
        return "TIE!"
    }
    else {
        return "Please Enter a Valid Option"
    }
}
function game(){
    playerscore = 0;
    computerscore = 0;
    round = 0;
    keepgoing = true;
while(keepgoing==true){
    playerSelection = prompt("Enter Rock 🗿, Paper📄 or Scissor✂").toLowerCase();
    computerSelection = computerPlay();
    if (playRound(playerSelection,computerSelection).substring(0,7) == "You Win"){
        playerscore ++;
        console.log(`Computer Chose:${computerSelection} You Win! Score:${playerscore} Computer Score:${computerscore}`);
        round ++;
    }
    else if (playRound(playerSelection,computerSelection).substring(0,7) == "You Los"){
        computerscore ++;
        console.log(`Computer Chose:${computerSelection} You Lose! Score:${playerscore} Computer Score:${computerscore}`);
        round++;
    }
    else if(playRound(playerSelection,computerSelection).substring(0,3) == "TIE"){
        playerscore = playerscore;
        computerscore = computerscore;
        console.log(`Computer Chose:${computerSelection} TIE! Score:${playerscore} Computer Score:${computerscore}`);
    }
    else{
        console.log(`Enter a Valid Option`);
    }
    if(round >= 5){
        keepgoing = false;
    }
}
if (playerscore > computerscore){
    console.log(`Congratulations! You WON!!`)
}
else if (playerscore < computerscore){
    console.log(`You LOST!`)
}
else{
    console.log(`It's a TIE!`)
}
}
game();