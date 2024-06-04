const pause__start = document.querySelector("#pause_start");
const video = document.querySelector(".video_player");
const progress__fill = document.querySelector(".progress__fill");
const progress = document.querySelector(".progress");

/* Progress panel. how duration and current times */
video.addEventListener("timeupdate", () => {
  const progress_percent = (video.currentTime / video.duration) * 100;
  progress__fill.style.width = `${progress_percent}%`;
});
function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}
progress.addEventListener("click", scrub);

let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", (e) => {
  mousedown && scrub(e);
});

/*  Work with volume. Lower and raise the video volume. */
const rangeButtons = document.querySelectorAll("input[type=range]");
rangeButtons.forEach((btn) => {
  btn.addEventListener("input", () => {
    video[btn.name] = btn.value;
  });
});

/* skip fast rewind the video */
const skipButtons = document.querySelectorAll("[data-skip]");
skipButtons.forEach((skipBtn) => {
  skipBtn.addEventListener("click", () => {
    video.currentTime += parseFloat(skipBtn.dataset.skip);
  });
});

/* pause and start video player */
pause__start.addEventListener("click", pause__start__function);
video.addEventListener("click", pause__start__function);
function pause__start__function() {
  let textButton;
  if (video.paused) {
    video.play();
    textButton = "❚❚";
  } else {
    video.pause();
    textButton = "►";
  }
  pause__start.textContent = textButton;
}
