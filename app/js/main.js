$(document).ready(function() {

 	"use strict";


//Запуск модулей

	$('.recipes__slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
	  infinite: true,
	  prevArrow: '<button type="button" class="slick-prev">Назад</button>',
	  nextArrow: '<button type="button" class="slick-next">Вперёд</button>',
	  responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
         {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
	  //autoplay: true,
	  //autoplaySpeed: 2000,
	});

  if($('.select').length) {
    select.init;
  }




});
