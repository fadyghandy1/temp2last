const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
    600: {
      slidesPerView: 1.45,
      spaceBetween: 0,
    },
    992: {
      initialSlide: 1,
      slidesPerView: 2.43,
      spaceBetween: 40,
    },
  },
  cssmode: true,
  mousewheel: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});
