var slides = document.querySelectorAll('.slides .slider_item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

function nextSlide() {
    slides[currentSlide].className = 'slider_item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider_item start';
}
