//const toggle = document.querySelector(".menu-toggle");
//const navLinks = document.querySelector(".nav_links");

//toggle.addEventListener("click", () => {
    //toggle.classList.toggle("active");
    //navLinks.classList.toggle("open");
//});

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav_links");

// Ouvrir/fermer quand on clique sur le bouton
toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle.classList.toggle("active");
    navLinks.classList.toggle("open");
});

// Fermer quand on clique ailleurs
document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggle.classList.remove("active");
        navLinks.classList.remove("open");
    }
});

// Fermer quand on scroll
window.addEventListener("scroll", () => {
    toggle.classList.remove("active");
    navLinks.classList.remove("open");
});
