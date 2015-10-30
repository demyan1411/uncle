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
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
	  //autoplay: true,
	  //autoplaySpeed: 2000,
	});

  if($('.select').length) {
    select.init;
  }


  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene, {
    calibrateX: true,
    calibrateY: true,
    invertX: true,
    invertY: false,
    limitX: false,
    limitY: false,
    scalarX: 60,
    scalarY: 60,
    frictionX: 0.04,
    frictionY: 0.04,
    originX: 5,
    originY: 5
  });

});
