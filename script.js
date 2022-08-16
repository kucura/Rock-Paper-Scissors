function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * choices.length);
    const computer = (choices[number])
    return computer
  
  }
  const playerEnter = prompt("Enter rock, paper, or scissors:")
  const playerSelection = playerEnter.toLowerCase()
  
  console.log("Player plays: "+ playerSelection)
  const computerSelection = getComputerChoice();
  console.log("Computer plays: "+computerSelection)
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Rock beats scissors! Player wins!")
    } //here
  
  }
  
  
  
  playRound(playerSelection, computerSelection)
  