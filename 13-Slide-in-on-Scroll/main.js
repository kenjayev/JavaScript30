const animationIMG = document.querySelectorAll(".slide-in");
function scrollFunc() {
  animationIMG.foreach((img) => {
    const imgTop = img.getBoundingClientReact().top;
    const imgBottom = img.getBoundingClientReact().bottom;
    const between = img.innerHeight / 3;
    const innerView = this.innerHeight;

    if (imgTop < between - innerView && imgBottom > between) {
      img.classList.add("active");
    } else if (imgTop > innerView || imgBottom < 0) {
      img.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollFunc);
