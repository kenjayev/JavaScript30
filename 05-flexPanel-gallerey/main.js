const panelItems = document.querySelectorAll(".item");
panelItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
