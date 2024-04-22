import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [ Navigation, Pagination ],
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
