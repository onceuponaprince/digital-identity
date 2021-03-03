// JavaScript Document
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var main_page = document.querySelector(".main_page");

left.addEventListener("mouseenter", function () {
  main_page.classList.add("hover-left");

  document.getElementById("about_me").style.visibility = "visible";
  document.getElementById("front_left").style.visibility = "hidden";
});

left.addEventListener("mouseleave", function () {
  main_page.classList.remove("hover-left");
  document.getElementById("about_me").style.visibility = "hidden";
  document.getElementById("front_left").style.visibility = "visible";

});

right.addEventListener("mouseenter", function () {
  main_page.classList.add("hover-right");
});

right.addEventListener("mouseleave", function () {
  main_page.classList.remove("hover-right");
});

function openNav() {
  document.getElementById("myNav").style.width = "100vw";
}
openNav();

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
closeNav();
