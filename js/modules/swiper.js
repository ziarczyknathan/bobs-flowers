import Swiper, { Autoplay, EffectFade } from "swiper";

export const initSwiper = () => {
  Swiper.use([Autoplay, EffectFade]);

  new Swiper(".swiper", {
    effect: "flip",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    speed: 15000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  new Swiper(".swiper__fade", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
};
