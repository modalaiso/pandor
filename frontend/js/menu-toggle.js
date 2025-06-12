const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav_links");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("open");
});