// ========= Scroll Top =========
$(document).ready(function () {
  //when document is ready
  $(window).scroll(function () {
    //when webpage is scrolled
    if ($(this).scrollTop() > 500) {
      //if scroll from top is more than 500
      $(".top-scroll").fadeIn(); //display element with class 'top-scroll'; opacity increases
    } else {
      //if not
      $(".top-scroll").fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});

// ========= Owl Carousel =========
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  pagination: true,
  navigation: true,
  responsive: {
    0: {
      items: 1,
      loop: true,
    },
    600: {
      items: 2,
      loop: true,
    },
    1000: {
      items: 3,
      loop: true,
    },
  },
});
