// pressed key
document.addEventListener("keydown", (e) => {
    sound(e.keyCode);
});

// click sensor
const keyBox = document.querySelector(".keys");
keyBox.addEventListener("click", (e) => {
    // click key sensor or click key's children was clicked
    if (e.target.classList.contains("key")) {
        const keyCode = e.target.getAttribute("data-key");
        sound(keyCode);
    } else if (
        e.target.classList.contains("key-name") ||
        e.target.classList.contains("sound")
    ) {
        const keyCode = e.target.parentElement.getAttribute("data-key");
        sound(keyCode);
    }
});

// when key pressed this function run and move audio and light key
function sound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;

    // key light and switch off
    key.classList.add("playing");
    removeTransition(key);

    // sound singing (move audio)
    audio.currentTime = 0;
    audio.play();
}

// remove light class in key which pressed
function removeTransition(key) {
    setTimeout(() => {
        key.classList.remove("playing");
    }, 100);
}
