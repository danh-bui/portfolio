const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");
const nav = document.querySelector("#nav");
const navLink = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  nav.classList.toggle("active");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    nav.classList.remove("active");
  })
}