const timeElements = Array.from(document.querySelectorAll("[data-time]"));
const allSec = timeElements
  .map((element) => element.dataset.time)
  .map((timeSTR) => {
    const [min, sec] = timeSTR.split(":").map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((acc, cur) => acc + cur);

const hour = parseInt(allSec / 3600);
const minute = parseInt(allSec / 60) % 60;
const second = allSec % 60;

console.log(hour, minute, second);
