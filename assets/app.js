(function () {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    speed: 15000,
    autoplay: {
      delay: 1,
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
})();
