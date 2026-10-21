let heading = document.querySelector("#title");

let redBtn = document.querySelector("#redBtn");
let blueBtn = document.querySelector("#blueBtn");
let resetBtn = document.querySelector("#resetBtn");

redBtn.addEventListener("click", function () {
    heading.style.color = "red"
});

blueBtn.addEventListener("click", function () {
    heading.style.color = "blue"
});

resetBtn.addEventListener("click", function () {
    heading.style.color = "black"

    document.body.style.backgroundColor = "white"
})

let bgGreenBtn = document.querySelector("#bgGreenBtn")

bgGreenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "green"
})

let bgResetBtn = document.querySelector("#bgResetBtn")

bgResetBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "white"
})

let randomBgBtn = document.querySelector("#randomBgBtn")

randomBgBtn.addEventListener("click", function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})