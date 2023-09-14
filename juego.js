const botones = document.querySelectorAll(".box");
let currentPlayer = "O";
let moves=0;
let gameOver=false;

botones.forEach((box) => {
  box.addEventListener("click", () => {
    playGame(box);
  });
});
function togglePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
function playGame(box) {
  if (!gameOver && box.textContent === "") {
    box.textContent = currentPlayer;
    moves++;
    checkForWinner();
    togglePlayer();
  }
}

function checkForWinner() {
    if (
        botones[0].textContent !== "" &&
        botones[0].textContent === botones[1].textContent &&
        botones[1].textContent === botones[2].textContent 
    ) {
        alert("gano el jugador"+botones[0].textContent)
    } else  if (
        botones[3].textContent !== "" &&
        botones[3].textContent === botones[4].textContent &&
        botones[4].textContent === botones[5].textContent 
    ) {
        alert("gano el jugador"+botones[3].textContent)  
    } else  if (
        botones[6].textContent !== "" &&
        botones[6].textContent === botones[7].textContent &&
        botones[7].textContent === botones[8].textContent 
    ) {
        alert("gano el jugador"+botones[6].textContent) 
    }else  if (
        botones[0].textContent !== "" &&
        botones[0].textContent === botones[3].textContent &&
        botones[3].textContent === botones[6].textContent 
    ) {
        alert("gano el jugador"+botones[0].textContent) 
    }else  if (
        botones[1].textContent !== "" &&
        botones[1].textContent === botones[4].textContent &&
        botones[4].textContent === botones[7].textContent 
    ) {
        alert("gano el jugador"+botones[1].textContent)   
    } else  if (
        botones[2].textContent !== "" &&
        botones[2].textContent === botones[5].textContent &&
        botones[5].textContent === botones[8].textContent 
    ) {
        alert("gano el jugador"+botones[2].textContent)
    } else  if (
        botones[0].textContent !== "" &&
        botones[0].textContent === botones[4].textContent &&
        botones[4].textContent === botones[8].textContent 
    ) {
        alert("gano el jugador"+botones[0].textContent)
    } else  if ( 
        botones[2].textContent !== "" &&
        botones[2].textContent === botones[4].textContent &&
        botones[4].textContent === botones[6].textContent 
    ) {
        alert("gano el jugador"+botones[2].textContent)
    } else  if (moves === 9) {
        alert("empate")
    }
        
    
   
}
