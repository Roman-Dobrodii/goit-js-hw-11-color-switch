const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
};

let intervalId = null;

setRandomColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(color);
  document.body.style.backgroundColor = color;
};

refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => setRandomColor(), 1000);
  refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};