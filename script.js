window.addEventListener('load', function () {
  var display = document.getElementById('display');
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');

  var startTime;
  var elapsedTime = 0;
  var timerInterval;

  function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
  }

  function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
    elapsedTime = 0;
    display.textContent = '00:00:00';
  }

  function updateTimer() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
  }

  function formatTime(time) {
    var milliseconds = Math.floor((time % 1000) / 10);
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / (1000 * 60)) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return (
      pad(hours) + ':' +
      pad(minutes) + ':' +
      pad(seconds) + '.' +
      pad(milliseconds)
    );
  }

  function pad(value) {
    return value.toString().padStart(2, '0');
  }

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);
});
