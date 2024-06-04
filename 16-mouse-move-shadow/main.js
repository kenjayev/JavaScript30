const hero = document.querySelector(".hero");
const text = document.querySelector(".hero h1");
hero.addEventListener("mousemove", (e) => {
  const maxMouseX = hero.offsetWidth / 2;
  const maxMouseY = hero.offsetHeight / 2;
  const x = ((e.clientX - maxMouseX) * 255) / maxMouseX;
  const y = ((e.clientY - maxMouseY) * 255) / maxMouseY;
  text.style = `
  text-shadow: rgba(255, 0, 255, 0.7) ${x}px ${y}px 0px,
    rgba(0, 255, 255, 0.7) ${-x}px ${y}px 0px,
    rgba(0, 255, 0, 0.7) ${-y}px ${x}px 0px,
    rgba(0, 0, 255, 0.7) ${y}px ${-x}px 0px;
  `;
});
