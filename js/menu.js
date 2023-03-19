const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },

  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
