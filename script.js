var time = 60;
var Hit3 = 0;
var score = 0;
var buble_container = "";

function bubleGame() {
  function makeBuble() {
    buble_container = document.querySelector(".buble-contain");
    let hit = document.querySelector(".hit");
    let buble = "";
    for (let i = 1; i <= 350; i++) {
      let random = Math.floor(Math.random() * 10);
      buble += `<div class="buble">${random}</div>`;
    }
    buble_container.innerHTML = buble;
  }

  function increaseScore() {
    score++;
    document.querySelector("#score").textContent = score;
  }
  function timer() {
    let interval = setInterval(function () {
      if (time != 0) {
        time--;
        document.querySelector("#time").textContent = time;
      } else {
        clearInterval(interval);
        localStorage.setItem("myscore", score);
        buble_container.innerHTML = `<h1  class="restart-btn" style="   
      text-align:center;
      color: aqua;
      font-size: 20px;
      margin-block:190px;">Game Over And your Score is ${score}<br><br><button class="btn">Restart Game</button></h1>`;
      }
    }, 1000);
  }

  function newHit() {
    Hit3 = Math.floor(Math.random() * 10);
    document.querySelector("#hit2").textContent = Hit3;
  }

  document
    .querySelector(".buble-contain")
    .addEventListener("click", function (detail) {
      let text = Number(detail.target.textContent);
      if (Hit3 === text) {
        increaseScore();
        makeBuble();
        newHit();
      }
    });

  newHit();
  timer();
  makeBuble();
}


bubleGame();

