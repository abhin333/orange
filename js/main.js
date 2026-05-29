const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const dots = document.querySelectorAll(".dot");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    mobileNav.classList.toggle("open");
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((item) => item.classList.remove("active"));
    dot.classList.add("active");
  });
});

const menuBtn = document.querySelector(".mobile-menu-toggle");
const desktopNav = document.querySelector(".desktop-nav");

if (menuBtn && desktopNav) {
  menuBtn.addEventListener("click", () => {
    desktopNav.classList.toggle("show");
  });
}