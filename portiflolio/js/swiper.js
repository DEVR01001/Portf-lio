const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".btn_next_work",
        prevEl: ".btn_prev_work",
      },

      pagination: {
        el: ".pagination",
        clickable: true
      },

      breakpoints: {
        // when window width is >= 320px
        640: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        // when window width is >= 640px
        1188: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }






  });