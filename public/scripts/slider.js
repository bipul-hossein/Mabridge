// scripts/slider.js

const swiper = new Swiper(".swiper-container", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500, // Keep delay at 2.5 seconds
    disableOnInteraction: false,
  },
  speed: 3000, // Slow down slide transition to 3 seconds
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const offset = -index * 100;
  document.querySelector(
    ".slider-wrapper"
  ).style.transform = `translateX(${offset}%)`;
  updatePagination(index);
}

function updatePagination(index) {
  const dots = document.querySelectorAll(".pagination-dots .dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function createPagination() {
  const slides = document.querySelectorAll(".slide");
  const paginationContainer = document.querySelector(".pagination-dots");
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(index));
    paginationContainer.appendChild(dot);
  });
  updatePagination(currentIndex);
}

function showNextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

createPagination();
setInterval(showNextSlide, 2500); // Maintain interval at 2.5 seconds

// home page marquee tag
function adjustMarqueeDirection() {
  var marquee = document.getElementById("news-marquee");
  if (window.innerWidth <= 768) {
    // Small devices
    marquee.setAttribute("direction", "left");
  } else {
    // Larger devices
    marquee.setAttribute("direction", "up");
  }
}

// Adjust marquee direction on load and resize
window.addEventListener("load", adjustMarqueeDirection);
window.addEventListener("resize", adjustMarqueeDirection);

// Ensure the marquee tag behaves correctly
function enforceMarqueeBehavior() {
  var marquee = document.getElementById("news-marquee");
  if (marquee.getAttribute("direction") !== "up" && window.innerWidth > 768) {
    marquee.setAttribute("direction", "up");
  }
  if (
    marquee.getAttribute("direction") !== "left" &&
    window.innerWidth <= 768
  ) {
    marquee.setAttribute("direction", "left");
  }
}

// Check marquee direction every 500ms to enforce correct behavior
setInterval(enforceMarqueeBehavior, 500);
