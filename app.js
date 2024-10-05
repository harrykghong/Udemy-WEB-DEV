const addP1button = document.querySelector("#p1Button");
const addP2button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Score");
const p2Display = document.querySelector("#p2Score");
const playto = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winnningScore = 5;
let isGameOver = false;
addP1button.addEventListener("click", function (e) {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winnningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score;
  }
});
addP2button.addEventListener("click", function (e) {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winnningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score;
  }
});
resetButton.addEventListener("click", reset);
playto.addEventListener("change", function () {
  winnningScore = parseInt(this.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("loser", "winner");
}
