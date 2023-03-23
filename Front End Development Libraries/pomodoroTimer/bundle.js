// Accede a los elementos HTML
const breakDecrementButton = document.getElementById("break-decrement");
const breakLengthLabel = document.getElementById("break-length");
const breakIncrementButton = document.getElementById("break-increment");
const sessionDecrementButton = document.getElementById("session-decrement");
const sessionLengthLabel = document.getElementById("session-length");
const sessionIncrementButton = document.getElementById("session-increment");
const timerLabel = document.getElementById("timer-label");
const timeLeftLabel = document.getElementById("time-left");
const startStopButton = document.getElementById("start_stop");
const resetButton = document.getElementById("reset");
const beepSound = document.getElementById("beep");

let isTimerRunning = false;
let timerInterval;
let currentTimer = "session";
let sessionLength = parseInt(sessionLengthLabel.textContent);
let breakLength = parseInt(breakLengthLabel.textContent);

// Agrega escuchadores de eventos a los botones
breakDecrementButton.addEventListener("click", () => {
  if (breakLength > 1) {
    breakLength -= 1;
    breakLengthLabel.textContent = breakLength;
  }
});

breakIncrementButton.addEventListener("click", () => {
  if (breakLength < 60) {
    breakLength += 1;
    breakLengthLabel.textContent = breakLength;
  }
});

sessionDecrementButton.addEventListener("click", () => {
  if (sessionLength > 1) {
    sessionLength -= 1;
    sessionLengthLabel.textContent = sessionLength;
    timeLeftLabel.textContent = `${sessionLength}:00`;
  }
});

sessionIncrementButton.addEventListener("click", () => {
  if (sessionLength < 60) {
    sessionLength += 1;
    sessionLengthLabel.textContent = sessionLength;
    timeLeftLabel.textContent = `${sessionLength}:00`;
  }
});

startStopButton.addEventListener("click", () => {
  if (!isTimerRunning) {
    startTimer();
  } else {
    clearInterval(timerInterval);
    isTimerRunning = false;
    startStopButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  }
});

function startTimer() {
    let timerSeconds = sessionLength * 60;
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds--;
      let minutesLeft = Math.floor(timerSeconds / 60);
      let secondsLeft = timerSeconds % 60;
      let formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
      timeLeftLabel.textContent = `${minutesLeft}:${formattedSeconds}`;
      if (timerSeconds === 0) {
        beepSound.play();
        clearInterval(timerInterval);
        if (currentTimer === "session") {
          currentTimer = "break";
          timerLabel.textContent = "Break";
          timerSeconds = breakLength * 60;
        } else {
          currentTimer = "session";
          timerLabel.textContent = "Session";
          timerSeconds = sessionLength * 60;
        }
        startTimer();
      }
    }, 1000);
    startStopButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
  
  resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isTimerRunning = false;
    currentTimer = "session";
    timerLabel.textContent = "Session";
    sessionLength = 25;
    breakLength = 5;
    sessionLengthLabel.textContent = sessionLength;
    breakLengthLabel.textContent = breakLength;
    timeLeftLabel.textContent = `${sessionLength}:00`;
    beepSound.pause();
    beepSound.currentTime = 0;
    startStopButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  });
  
