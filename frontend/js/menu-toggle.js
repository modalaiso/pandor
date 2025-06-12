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
    e.stopPropagation(); // Empêche le clic de remonter au document
    toggle.classList.toggle("active");
    navLinks.classList.toggle("open");
});

// Fermer le menu si on clique ailleurs
document.addEventListener("click", (e) => {
    // Vérifie si le clic est en dehors du toggle et du menu
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggle.classList.remove("active");
        navLinks.classList.remove("open");
    }
});
