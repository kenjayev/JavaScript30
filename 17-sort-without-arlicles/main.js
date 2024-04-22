const bandsUL = document.querySelector("#bands");
const bands = [
   "The Plot in You",
   "The Devil Wears Prada",
   "Pierce the Veil",
   "Norma Jean",
   "The Bled",
   "Say Anything",
   "The Midway State",
   "We Came as Romans",
   "Counterparts",
   "Oh, Sleeper",
   "A Skylit Drive",
   "Anywhere But Here",
   "An Old Dog",
   "a sher",
   "an irland",
];

function trimArticle(word) {
   if (word.startsWith("The ") || word.startsWith("the ")) {
      return word.slice(4);
   } else if (word.startsWith("An ") || word.startsWith("an ")) {
      return word.slice(3);
   } else if (word.startsWith("A ") || word.startsWith("a ")) {
      return word.slice(2);
   } else {
      return word;
   }
}
bandsUL.innerHTML = bands
   .sort((a, b) => (trimArticle(a) > trimArticle(b) ? 1 : -1))
   .map((word) => {
      return `<li>${word}</li>`;
   })
   .join("");
