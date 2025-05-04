export const photogallerySlider = (Swiper,Navigation) => {
    const swiper = new Swiper(".photogallery-slider", {
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        modules: [Navigation],
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
}