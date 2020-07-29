const elements = [].slice.call(document.getElementsByClassName("determinate"));
const values = [...Array(11).keys()].map((key) => key * 10);
let i = 0;
let isPaused = false;

function changeBarSize(elements) {
  if (isPaused) return;

  for (const element of elements) {
    element.style.width = `${values[i]}%`;
  }

  if (i === 11) {
    isPaused = true;
    i = 0;
    setTimeout(() => (isPaused = false), 100);
  } else i += 1;
}

setInterval(() => changeBarSize(elements), 500);
