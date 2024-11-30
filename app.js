// app.js

let currentSlide = 0;
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');
const navButtons = document.querySelectorAll('.nav-btn');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        contents[i].classList.remove('active');
        navButtons[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    contents[index].classList.add('active');
    navButtons[index].classList.add('active');
}

navButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

