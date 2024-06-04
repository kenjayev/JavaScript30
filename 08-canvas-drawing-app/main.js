const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let drawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!drawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  [lastX, lastY] = [e.clientX, e.clientY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  direction ? ctx.lineWidth-- : ctx.lineWidth++;
}

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
  draw(e);
});

canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));
canvas.addEventListener("mousemove", draw);
