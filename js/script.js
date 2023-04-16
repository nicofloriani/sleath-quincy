var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
var toggleView = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
});

toggleView.addEventListener("click", function () {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerText = "Sleath Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
    }
});