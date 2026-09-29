const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const text = "Rey Montilla";
const typing = document.getElementById("typing");

let i = 0;

function typeText() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 120);
    }
}

typeText();

document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();