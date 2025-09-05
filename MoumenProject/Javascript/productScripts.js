var swiper = new Swiper('.slideshow-container', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
});
