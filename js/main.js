const swiper = new Swiper('.works__swiper', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 28,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});

const swiperBottom = new Swiper('.clients__swiper', {
  slidesPerView: 2,
  spaceBetween: 85,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    374: {
      slidesPerView: 2,
    },
    470: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  
});

const buttons = document.querySelectorAll('.header__mobile-menu');
const elements = document.querySelectorAll('.header__top, .menu__list');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Удаляем 'active' у всех элементов, кроме текущего
    elements.forEach(el => el.classList.toggle('active'));
  });
});