import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { menuOfIcons } from "./modules/menioficons";
import { mainSwiper } from './modules/swiper';
import { teamSlider } from './modules/teamslider';
import { photogallerySlider } from './modules/photogallery';
document.addEventListener("DOMContentLoaded", () => {
    menuOfIcons();
    mainSwiper(Swiper,Navigation,Pagination)
    teamSlider(Swiper,Navigation,Pagination)
    photogallerySlider(Swiper,Navigation)
});
