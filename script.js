
    // --- Mobile burger menu ---
    const burger = document.getElementById('burger');
    if (burger) {
        burger.addEventListener('click', () => {
            alert("Mobile menu toggle can be added here.");
        });
    }

    // --- Testimonial slider ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000); // change every 4 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Button events - pause auto then restart
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }

    // Initialize
    if (slides.length > 0) {
        showSlide(currentIndex);
        startAutoSlide();
    }

