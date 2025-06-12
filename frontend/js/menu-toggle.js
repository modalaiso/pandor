const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav_links");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle.classList.toggle("active");
    navLinks.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggle.classList.remove("active");
        navLinks.classList.remove("open");
    }
});

window.addEventListener("scroll", () => {
    toggle.classList.remove("active");
    navLinks.classList.remove("open");
});
