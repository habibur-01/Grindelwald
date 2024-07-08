const initSlider = () => {
    const testimonals = document.querySelector(".slider-wrapper .testimonial-cards")
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-btn")
    slideButtons.forEach(element => {
        element.addEventListener("click", () => {
           const direction = element.id === "prev-slide" ? -1 : 1;
           const scrollAmount = testimonals.clientWidth * direction;
           testimonals.scrollBy({left:scrollAmount, behavior: "smooth"})
        })
        
    });
}
window.addEventListener("load", initSlider)