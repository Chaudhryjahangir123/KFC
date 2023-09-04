// Slider1
const sContainer = document.querySelector('.s');
const sSlides = document.querySelectorAll('.s2');
const numSlides = sSlides.length;
let currentIndex = 0;

function showSlide(index) {
    if (index >= 0 && index < numSlides) {
        sContainer.scrollLeft = sSlides[index].offsetLeft;
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % numSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + numSlides) % numSlides;
    showSlide(currentIndex);
}

// Initially, show the first slide
showSlide(currentIndex);

// Add event listeners to the left and right navigation buttons
const left1Button = document.getElementById('left1');
const right1Button = document.getElementById('right1');

left1Button.addEventListener('click', prevSlide);
right1Button.addEventListener('click', nextSlide);
// End of slider1









// Slider 2
const slideContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const firstCardWidth = slider.querySelector(".slider01").offsetWidth;
const leftButton = slideContainer.querySelector("#left"); // Left button
const rightButton = slideContainer.querySelector("#right"); // Right button

let isDragging = false;
let startX;
let startScrollLeft;

// Add event listener for the left button to scroll the carousel to the left
leftButton.addEventListener("click", () => {
  slider.scrollLeft -= firstCardWidth; // Scroll left
});

// Add event listener for the right button to scroll the carousel to the right
rightButton.addEventListener("click", () => {
  slider.scrollLeft += firstCardWidth; // Scroll right
});

const dragStart = (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  // Record the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  // Update the scroll position of the carousel based on the cursor movement
  slider.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
};

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// Slider 2 END 

