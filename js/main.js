document.addEventListener('DOMContentLoaded', function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
})




// var swiperOnepage = new Swiper('.swiper-container-onePage', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar'
//   }
// });

// swiper.on('slideChange', function() {
//   var activeIndex = swiper.activeIndex;

//   swiper.slides.forEach(function(slide, index) {
//     if (index === activeIndex) {
//       slide.classList.remove('swiper-slide-onePage-inativo');
//     } else {
//       slide.classList.add('swiper-slide-onePage-inativo');
//     }
//   });
// });
// var carousel = document.getElementById('carouselExampleIndicators');
// carousel.addEventListener('slid.bs.carousel', function (event) {
//   var activeSlideIndex = event.to + 1;
//   var tagSlider = document.querySelector('.tag-slider');
//   tagSlider.textContent = activeSlideIndex;
// });
