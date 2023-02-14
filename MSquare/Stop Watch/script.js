const stopWatch = document.getElementsByClassName("stopWatch")[0];
const btnStart = document.getElementsByClassName("btnStart")[0];
const btnStop = document.getElementsByClassName("btnStop")[0];
const btnContinue = document.getElementsByClassName("btnContinue")[0];
const btnRestart = document.getElementsByClassName("btnRestart")[0];

let seconds = 0, 
 minutes = 0, 
 hours = 0;

const startTime = () => {
    seconds += 1;
    
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;

            if (minutes === 60) {
                minutes = 0;
                hours += 1; 
            }
        }
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds ;
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes ;
    const hoursText = hours < 10 ? "0" + hours.toString() : hours ;
    stopWatch.textContent = hoursText + ":" + minutesText +":" + secondsText;
};

let setIntervalId;
btnStart.addEventListener("click", () => {
    setIntervalId = setInterval(startTime, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(setIntervalId);
})

btnContinue.addEventListener("click", () => {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(startTime, 1000);
});

btnRestart.addEventListener("click", () => {
    clearInterval(setIntervalId);
    (meleSeconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
    setIntervalId = setInterval(startTime, 1000);
});