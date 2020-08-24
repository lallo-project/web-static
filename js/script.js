$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.hero');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(document).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar.navbar-dyn").addClass('navbar-tosca');
      } else {
        $(".navbar.navbar-dyn").removeClass('navbar-tosca');
      }
    });
  }

  (function () {
    $('.swipe-box')
      .slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      })
  })();

  (function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  })()
});