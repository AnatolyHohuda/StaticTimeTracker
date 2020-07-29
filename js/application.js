const element = document.getElementById("statusBar1");
const values = [...Array(11).keys()].map((key) => key / 10);
let i = 0;
let isPaused = false;

function changeBarSize(element) {
  if (isPaused) return;

  element.style.transform = `scaleX(${values[i]})`;

  if (i === 11) {
    isPaused = true;
    i = 0;
    setTimeout(() => (isPaused = false), 100);
  } else i += 1;
}

setInterval(() => changeBarSize(element), 500);
