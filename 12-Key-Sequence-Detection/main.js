const secretWord = "kenjayev";
const pressed = [];
window.addEventListener("keyup", (e) => {
   console.log(e.key);
   pressed.push(e.key);
   pressed.splice(-secretWord.length - 1, pressed.length - secretWord.length);
   if (pressed.join("").includes(secretWord)) {
      console.log("You are win");
   }
   console.log(pressed);
});
