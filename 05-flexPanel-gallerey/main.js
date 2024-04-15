const panelItems = document.querySelectorAll(".item");
panelItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
function toggleActiveClass(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panelItems.forEach((item) =>
    item.addEventListener("transitionend", toggleActiveClass)
);
