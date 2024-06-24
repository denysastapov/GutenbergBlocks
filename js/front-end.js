document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".swiper.swiper-double", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const swiperSingle = new Swiper(".swiper.swiper-single", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    console.error("Swiper is not defined.");
  }
});
