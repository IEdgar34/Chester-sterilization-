let swiperInstance;
export const teamSlider = (Swiper, Navigation, Pagination) => {
    /* const initSwiper = () => {
        if (swiperInstance) swiperInstance.destroy(true, true);

        const isMobile = window.innerWidth <= 640;

        swiperInstance = new Swiper(".team-swiper", {
            modules: [Navigation],
            slidesPerView: isMobile ? 1 : 4,
            spaceBetween: isMobile ? 40 : 20,
            loop: true,
            centeredSlides: isMobile, // для мобилок включаем центр
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    };

    // Инициализация при загрузке
    initSwiper();

    // Повторная инициализация при ресайзе
    window.addEventListener("resize", () => {
        initSwiper();
    }); */
    const swiper = new Swiper(".team-swiper", {
        slidesPerView: "auto",
        spaceBetween: 80,
        centeredSlides: true,
        loop: true,
        modules: [Navigation],
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,
                
                
            },
        },
    });
};
