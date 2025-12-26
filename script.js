let startTime, elapsedTime = 0, timerInterval;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");
    let formattedHH = hh.toString().padStart(2, "0");

    return `${formattedHH} : ${formattedMM} : ${formattedSS} : ${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    
    // Logic: Disable start, enable others
    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

function pause() {
    clearInterval(timerInterval);
    // Logic: Enable start so we can resume
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    print("00 : 00 : 00 : 000");
    elapsedTime = 0;
    // Logic: Reset button states
    startBtn.disabled = false;
    pauseBtn.disabled = false;
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);