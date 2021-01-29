const btnBurger = document.querySelector("#btnBurger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".header .overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnBurger.addEventListener("click", function () {
  console.log("clicked");

  if (header.classList.contains("open")) {
    // Close Burger Menu
    body.classList.remove("noscroll");

    header.classList.remove("open");

    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Burger Menu
    body.classList.add("noscroll");

    header.classList.add("open");

    fadeElems.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
