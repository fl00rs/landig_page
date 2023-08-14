$(function () {
  $(".slider").slick({
    dots: false,
    prevArrow:
      '<button class="slide_arrow slide_arrow-left"><img src="arrow_slider_l.svg" alt=""></button>',
    nextArrow:
      '<button class="slide_arrow slide_arrow-right"><img src="arrow_slider_r.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 956,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".autoplay").slick({
    dots: false,
    prevArrow:
      '<button class="slide_arrow slide_arrow-left"><img src="arrow_comments-l.svg" alt=""></button>',
    nextArrow:
      '<button class="slide_arrow slide_arrow-right"><img src="arrow_comments-r.svg" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
  });
});
