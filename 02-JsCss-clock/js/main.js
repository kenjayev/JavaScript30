const secondHand = document.querySelector(".secunde");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function run() {
    const data = new Date();

    const second = data.getSeconds();
    let secondDeg = (360 / 60) * second;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const minute = data.getMinutes();
    const minuteDeg = (360 / 60) * minute + (6 / 60) * second;
    minuteHand.style = `transform: rotate(${minuteDeg}deg)`;

    // 360 / 12 -> hon our how degree * (hour % 12) -> which hour how degree + (30/60) / minute -> a small shift relative to the minute
    const hour = data.getHours();
    const hourDeg = (360 / 12) * (hour % 12) + (30 / 60) * minute;
    hourHand.style = `transform: rotate(${hourDeg}deg);`;
}
setInterval(run, 1000);
run();
