let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true; //player x, playerO
let count =0;

const winnigPtrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = '#3c0177'
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if(count === 9 && !isWinner){
        gameDraw();
    }
  });
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulatiuons, Winner is ${winner}`
    msgContainer.classList.remove("hide")
};

const gameDraw = () =>{
    msg.innerText = "Game is Draw"
    msgContainer.classList.remove("hide");
    disabeleBoxes();
}

const disabeleBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
  for (let pattern of winnigPtrn) {
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );


    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val =boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val ===pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            disabeleBoxes();
        }
    }
  }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const resetGame = () =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

newGameBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click", resetGame);