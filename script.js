



let pc = 0
let user = 0


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * choices.length);
    const computer = (choices[number])
    return computer
  
  }

  
  
  function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Rock beats scissors! Player wins!"); user++
      } else if (playerSelection ==="rock" && computerSelection === "paper") {
      console.log ("Paper beats rock! Computer wins!"); pc++
      } else if (playerSelection ==="rock" && computerSelection === "rock") {
      console.log ("It's a tie!")
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("Scissors cut paper! Computer wins!"); pc++
      } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("Paper beats rock! Player wins!"); user++
      } else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log ("It's a tie!")
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log ("Rock beats scissors! Computer wins!"); pc++
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log ("Scissors cut paper! Player wins!"); user++
      } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      console.log ("It's a tie!")
      } else console.log("You entered wrong word!!!")
        
     
  
  }
  
  
  
 for (let i = 0; i < 5; i++) {
  getComputerChoice() 
  
  //const playerSelection = playerEnter.toLowerCase()
  
  console.log("Player plays: "+ playerSelection)
  const computerSelection = getComputerChoice();
  console.log("Computer plays: "+computerSelection)
   
   playRound(playerSelection, computerSelection)
}

console.log("Final score User "+user+":"+pc+" Computer")

if (user>pc) {
  console.log("YOU WIN!!!")
  } else if (user<pc) {
  console.log ("PC WINS!! :(")
  } else {
  console.log("It's a tie!")
  }
  
  