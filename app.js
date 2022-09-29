const main = document.getElementById("canvas");
const button = document.getElementById("button");



button.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
  main.style.backgroundColor = `rgb(${red},${blue},${green})`
});
