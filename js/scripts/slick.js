$(function() {
  if($(window).width() >= mediumBreakPoint) {
    $('.homepage-carousel').slick({
      autoplay: true,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1200,
      fade: true,
      cssEase: 'linear'
    });
  } else {
    $('.homepage-carousel').slick({
      dots: true,
      arrows: false
    });
  }
});
