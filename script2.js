let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    document.getElementById('time').innerText = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

function start() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTime, 1000);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('time').innerText = "00:00:00";
}
