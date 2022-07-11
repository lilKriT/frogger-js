const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-btn");

const squares = document.querySelectorAll(".grid div");
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
