const video = document.querySelector("#video");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((e) => {
    console.log(e);
  });
video.addEventListener("play", () => {
  var draw = function () {
    const width = canvas.width;
    const height = canvas.height;
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = filter(pixels);
    ctx.putImageData(pixels, 0, 0);
    requestAnimationFrame(draw);
  };
  draw();
});
function filter(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] - 10;
    pixels.data[i + 1] = pixels.data[i + 1] + 10;
    pixels.data[i + 2] = pixels.data[i + 2] + 30;
  }
  return pixels;
}

const takePhoto = document.querySelector("#takePhoto");
const snap = document.querySelector("#snap");
takePhoto.addEventListener("click", () => {
  snap.currentTime = 0;
  snap.play();
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = `photo-${new Date()}`;
  a.click();
});
