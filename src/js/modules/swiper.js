export const mainSwiper = (Swiper, Navigation, Pagination) => {
    const swiper = new Swiper(".main-swiper", {
        spaceBetween: 20,
        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};
