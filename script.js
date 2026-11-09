let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let h2 = document.querySelector('h2');

let startTime = 0;

function format(miliseconds, seconds, minutes, hours) {
    let ms = String(miliseconds).padStart(3, '0');
    let s = String(seconds).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let h = String(hours).padStart(2, '0');

    h2.innerHTML = `${h}:${m}:${s}:${ms}`;
}


function start() {
    if (timer !== null) {
        return;
    }

    startTime = Date.now() - (miliseconds + (seconds * 1000) + (minutes * 60000) + (hours * 3600000));
    
    timer = setInterval(function cron() {
        let elapsedTime = Date.now() - startTime;

        miliseconds = elapsedTime % 1000;
        seconds = Math.floor((elapsedTime / 1000) % 60);
        minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        
        format(miliseconds, seconds, minutes, hours);
    }, 10);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    h2.innerHTML = '00:00:00:000'
}

format(miliseconds, seconds, minutes, hours);
