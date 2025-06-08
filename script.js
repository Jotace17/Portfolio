function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentIndex = 0;
function moveCarousel(direction) {
  const track = document.getElementById('carousel-track');
  const images = track.querySelectorAll('img');
  const total = images.length;

  currentIndex = (currentIndex + direction + total) % total;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}