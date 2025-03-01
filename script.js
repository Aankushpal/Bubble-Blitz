const score = document.querySelector("#score")
const hit = document.querySelector("#hit")
const timer = document.querySelector("#timer")
const hero = document.querySelector("#hero")

var num = 0;
var time = 30;
var scoree = 0;


function bubble() {
    var nums = ""
    var digits = 0

    for (let i = 1; i <= 96; i++) {
        digits = Math.floor(Math.random() * 10)
        nums += `<h5 class="bubble">${digits}</h5>`
    }

    document.querySelector("#hero").innerHTML = nums
}

function incrScore() {
    scoree += 5;
    score.textContent = scoree
}

function runTime() {
    var sec = setInterval(function () {
        if (time > 0) {
            time--;
            timer.textContent = time
        }
        else {
            clearInterval(sec)
            hero.innerHTML = `<h1>Game Over!</h1> 
                              <h2>Total Score: ${scoree}</h2>
                              <button id="restart">Restart</button>`
            hit.textContent = 0
            score.textContent = 0
            document.querySelector("#restart").addEventListener("click", function () {
                location.reload(); // Reloads the page to restart the game
            });
        }
    }, 1000)
}

function getNewNo() {
    num = Math.floor(Math.random() * 10);
    hit.textContent = num
}


hero.addEventListener("click", function (dets) {
    let clicknum = Number(dets.target.textContent)
    if (clicknum === num) {
        incrScore()
        getNewNo()
        bubble()
    }
})

runTime()
bubble()
getNewNo()
