const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dots button");

let current = 0;
let timer;

function showSlide(nextIndex) {
  current = (nextIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === current);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("on", index === current);
  });
}

function restartAutoPlay() {
  clearInterval(timer);
  timer = setInterval(() => {
    showSlide(current + 1);
  }, 6500);
}

document.querySelector(".next").addEventListener("click", () => {
  showSlide(current + 1);
  restartAutoPlay();
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(current - 1);
  restartAutoPlay();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    restartAutoPlay();
  });
});

restartAutoPlay();

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

