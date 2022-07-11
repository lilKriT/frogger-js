const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-btn");

const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
let currentIndex = 76;

const width = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width != 0) currentIndex--;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex++;
      break;
    case "ArrowUp":
      if (currentIndex >= width) currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;

    default:
      break;
  }

  squares[currentIndex].classList.add("frog");
}
document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  logsLeft.forEach((log) => moveLogLeft(log));
  logsRight.forEach((log) => moveLogRight(log));
}

function moveLogLeft(log) {
  switch (true) {
    case log.classList.contains("l1"):
      log.classList.remove("l1");
      log.classList.add("l2");
      break;
    case log.classList.contains("l2"):
      log.classList.remove("l2");
      log.classList.add("l3");
      break;
    case log.classList.contains("l3"):
      log.classList.remove("l3");
      log.classList.add("l4");
      break;
    case log.classList.contains("l4"):
      log.classList.remove("l4");
      log.classList.add("l5");
      break;
    case log.classList.contains("l5"):
      log.classList.remove("l5");
      log.classList.add("l1");
      break;

    default:
      break;
  }
}

function moveLogRight(log) {
  switch (true) {
    case log.classList.contains("l1"):
      log.classList.remove("l1");
      log.classList.add("l5");
      break;
    case log.classList.contains("l2"):
      log.classList.remove("l2");
      log.classList.add("l1");
      break;
    case log.classList.contains("l3"):
      log.classList.remove("l3");
      log.classList.add("l2");
      break;
    case log.classList.contains("l4"):
      log.classList.remove("l4");
      log.classList.add("l3");
      break;
    case log.classList.contains("l5"):
      log.classList.remove("l5");
      log.classList.add("l4");
      break;

    default:
      break;
  }
}

setInterval(autoMoveLogs, 1000);
