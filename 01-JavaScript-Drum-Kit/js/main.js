document.addEventListener("keydown", (e) => {
    sound(e.keyCode);
});

const keyBox = document.querySelector(".keys");
keyBox.addEventListener("click", (e) => {
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

function sound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;

    key.classList.add("playing");
    removeTransition(key);
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(key) {
    setTimeout(() => {
        key.classList.remove("playing");
    }, 100);
}
