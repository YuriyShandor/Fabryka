$(document).ready(function() {
  $('.header-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: false,
   //autoplaySpeed: 5000,
   dots: true,
   dotsClass: 'slick-dots__header-slider',
  });

  $('select').niceSelect();
});
