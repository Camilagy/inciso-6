let currentIndex = 0;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images'); // función para actualizar un carrusel de imágenes
    const images = document.querySelectorAll('.carousel-images img'); // función para actualizar un carrusel de imágenes
    const imageWidth = images[0].clientWidth;

    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function showNextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarousel();
}

function showPreviousImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);


window.addEventListener('resize', updateCarousel); //Carrusel regreso

setInterval(showNextImage, 30000); //Duracion del carrusel


document.addEventListener('keydown', (event) => { // Detecta la tecla
    if (event.key === 'ArrowRight') {
       
        showNextImage();
    } else if (event.key === 'ArrowLeft') { // Flecha derecha
        
        showPreviousImage(); // Flecha izquierda
    }
});