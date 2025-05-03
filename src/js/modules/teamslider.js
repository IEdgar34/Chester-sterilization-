export const teamSlider = (Swiper, Navigation, Pagination) => {
    const swiper = new Swiper(".team-swiper", {
        spaceBetween: 20,
        slidesPerView: "auto",
        modules: [Navigation, Pagination],
        /* pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }, */

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};
