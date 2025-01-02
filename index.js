const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0;

function loopSlides() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slideshow.style.transform = `translateY(-${currentIndex * 300}px)`;
}

setInterval(loopSlides, 3000);








function showPopup(name, title, description, imageSrc) {
  document.getElementById("popup-name").textContent = name;
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = description;
  document.getElementById("popup-image").src = imageSrc;

  const popup = document.getElementById("popup");
  popup.style.display = "flex"; // Show the popup
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Hide the popup
}







function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active"); // Toggle the 'active' class
}
