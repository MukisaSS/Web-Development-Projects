const box = document.getElementById("color-box");
const button = document.getElementById("change-color");

const colors = ["lightblue", "salmon", "mediumseagreen", "gold", "plum"];

button.addEventListener("click", function () {
    const newColor = randomRGB();
    box.style.backgroundColor = newColor;
});