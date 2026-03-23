const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav__link");

function closeMenu() {
    if (!nav || !burger) return;
    nav.classList.remove("nav--open");
    burger.setAttribute("aria-expanded", "false");
}

function openMenu() {
    if (!nav || !burger) return;
    nav.classList.add("nav--open");
    burger.setAttribute("aria-expanded", "true");
}

function toggleMenu() {
    if (!nav || !burger) return;

    const isOpen = nav.classList.contains("nav--open");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

if (burger && nav) {
    burger.addEventListener("click", toggleMenu);
}

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (!nav || !burger) return;

    const isClickInsideNav = nav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
        closeMenu();
    }
});
const slider = document.getElementById("reviewsSlider");
const arrowRight = document.querySelector(".arrow.right");
const arrowLeft = document.querySelector(".arrow.left");

if (slider && arrowRight && arrowLeft) {
    arrowRight.addEventListener("click", () => {
        slider.scrollBy({ left: 340, behavior: "smooth" });
    });

    arrowLeft.addEventListener("click", () => {
        slider.scrollBy({ left: -340, behavior: "smooth" });
    });
}

const brandsSlider = document.getElementById("brandsSlider");
const brandsRight = document.querySelector(".brands-right");
const brandsLeft = document.querySelector(".brands-left");

if (brandsSlider && brandsRight && brandsLeft) {
    brandsRight.addEventListener("click", () => {
        brandsSlider.scrollBy({ left: 240, behavior: "smooth" });
    });

    brandsLeft.addEventListener("click", () => {
        brandsSlider.scrollBy({ left: -240, behavior: "smooth" });
    });
}