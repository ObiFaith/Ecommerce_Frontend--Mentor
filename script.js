const openNavBtn = document.querySelector(".open-nav-btn");
const closeNavBtn = document.querySelector(".close-nav-btn");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav_item");

openNavBtn.addEventListener("click", openNavigation);
closeNavBtn.addEventListener("click", closeNavigation);
window.addEventListener("resize", closeNavigation);

function openNavigation() {
  nav.classList.add("nav_visible");

  //animate links
  navItems.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
        index / 7 + 0.2
      }s`;
    }
  });
}

function closeNavigation() {
  nav.classList.remove("nav_visible");

  // refresh animation or removes animation
  navItems.forEach((link) => {
    link.style.animation = "";
  });
}
