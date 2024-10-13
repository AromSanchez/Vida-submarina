let slideIndex = 0;
showSlides(slideIndex);

// Función para mostrar las diapositivas
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quitar la clase "active" de todos los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar la diapositiva actual y añadir "active" al punto correspondiente
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Controlador de los puntos para cambiar la diapositiva actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Cambiar automáticamente de diapositiva cada 5 segundos
setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 5000); // Cambia cada 5 segundos