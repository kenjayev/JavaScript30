const checkBoxes = document.querySelectorAll("input[type='checkbox']");

let lastCheckedBox;
function handlerChecker(e) {
   let isBetween = false;
   if (e.shiftKey && this.checked) {
      checkBoxes.forEach((checkbox) => {
         if (checkbox === this || checkbox === lastCheckedBox) {
            isBetween = !isBetween;
         }
         if (isBetween) {
            checkbox.checked = true;
         }
      });
   }

   lastCheckedBox = this;
}

checkBoxes.forEach((checkbox) =>
   checkbox.addEventListener("click", handlerChecker)
);
