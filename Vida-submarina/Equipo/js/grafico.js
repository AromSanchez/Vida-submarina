let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function moveSlide(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    updateCarousel();
}

function currentSlide(n) {
    slideIndex = n;
    updateCarousel();
}

function updateCarousel() {
    const carouselSlide = document.getElementById('carousel-slide');
    const slideWidth = slides[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

setInterval(() => {
    moveSlide(1);
}, 3000);