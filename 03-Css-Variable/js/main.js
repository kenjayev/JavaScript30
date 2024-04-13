const inputs = document.querySelectorAll(".controls input");
function changeVariable() {
    const size = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + size
    );
}

inputs.forEach((input) => input.addEventListener("change", changeVariable));
inputs.forEach((input) => input.addEventListener("mousemove", changeVariable));
