let userScore =0;
let computerScore =0;

const uScore = document.getElementById('user-score');
const compScore = document.getElementById('computer-score');
const winMsg = document.getElementById('msg');
const choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    //rock,paper,scissors 
    let options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random() * 3)];
}

const drawGame = ()=> {
    winMsg.innerText = "Game Draw"
}

const showWinner = (userWin) => {
    if(userWin){
        winMsg.innerText = "You Win"
        userScore++;
        uScore.innerText = userScore;

    }
    else{
        winMsg.innerText ="Computer Beats You"
        computerScore++;
        compScore.innerText = computerScore;
    }
}

const playGame = (userChoice) =>{
    //Generate Computer Choice
    const computerChoice = generateComputerChoice();
    console.log("user choice is", userChoice)
    console.log("computer choice is", computerChoice)

    if(userChoice === computerChoice){
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper,scissors
            userWin = computerChoice === "paper"  ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})