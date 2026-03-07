let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3)

    if (choice == 0){
        decision = "rock";
    }
    else if (choice == 1){
        decision = "paper";
    }
    else{
        decision = "scissors";
    }
    return decision;
}

function getHumanChoice(){
    choice = prompt("Please pick between rock, paper, scissors: ")

    if (choice == "rock"){
        return "rock";
    }
    else if (choice == "paper"){
        return "paper";
    }
    else if (choice == "scissors"){
        return "scissors";
    }
    else{
        return "not valid move";
    }
}

function playGame(){
    for (i = 1; i <= 5; i++){
        function playRound(humanChoice, computerChoice){
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            humanChoice = humanChoice.toLowerCase();
            

            if (humanChoice == "rock" && computerChoice == "scissors"){
                humanScore += 1
                message =  "You win! Rock beats Scissors";
                
            }
            else if (humanChoice == "scissors" && computerChoice == "paper"){
                humanScore += 1
                message = "You win! Scissors beats Paper";
                
            }
            else if (humanChoice == "paper" && computerChoice == "rock"){
                humanScore += 1
                message =  "You win! Papers beats Rock";
                
            }
            else{
                computerScore += 1
                message =  "YOU LOSE!!!";
                
            }
            console.log("human score is: ", humanScore);
            console.log("computer score is: ", computerScore);
            console.log(message);
        }
        playRound();
    }
    winner = Math.max(humanScore, computerScore)
    if (winner == humanScore){
        return "Congratulations, you have won!"
    }
    else{
        return "You have been defeated."
    }
}

