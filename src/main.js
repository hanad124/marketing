const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

// Menu
menu.addEventListener("click", (e) => {
    nav.classList.toggle("show-nav");
})