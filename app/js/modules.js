//******* ie8 preventDefault
	function ie8SafePreventEvent(e) {
	    if (e.preventDefault) {
	        e.preventDefault()
	    } else {
	        e.stop()
	    };

	    e.returnValue = false;
	    e.stopPropagation();
	}

var select = (function() {

	var start = function() {
			_setUpListeners();

		},
		_setUpListeners = function() {
			_showSelect();
			_closeSelect();
			_insertValue();
			//_resetSelect();
		},
		_showSelect = function() {
			$('.select__value').on('click', function() {
				var $scroller = $(this).siblings('.select__choise');
				$scroller.slideToggle(200);
				$('.select__choise').addClass('select__choise--active');
			});
		},
		_closeSelect = function() {
			$(document).mouseup(function (e){
				var div = $(".select__choise--active");
				if (!div.is(e.target)
					&& !div.siblings('.select__value').is(e.target)) {
					$('.select__choise').slideUp(200);

				}
				$('.select__choise').removeClass('select__choise--active');
			});
		},
		_insertValue = function() {
			$('.select__option').on('click', function() {
				var val = $(this).text();
				$(this).closest('.select__choise').siblings('.select__value').text(val);
				//.addClass('form__selectValue_active');
			});
		}

	return {
        init: start()
	}

}());

;(function() {
  var myLatlng = new google.maps.LatLng(64.628808, 92.822123);

  var myOptions = {
    zoom: 4,
    center: myLatlng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

  var markerImage = new google.maps.MarkerImage(
      'img/marker.png',
      new google.maps.Size(51,65),
      new google.maps.Point(0,0),
      new google.maps.Point(0,33)
  );
  var markerImageHover = new google.maps.MarkerImage(
    'img/markerHover.png',
    new google.maps.Size(51,365),
    new google.maps.Point(0,0),
    new google.maps.Point(0,33)
  );

  var markers = {},
      places = [],
  	  $selectOption = $('.select__option');

  $selectOption.each(function() {
  	var coor = $(this).data('coor').split(', ');
  	coor[0] = + coor[0];
  	coor[1] = + coor[1];
  	places.push(coor);
  });

  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var number = 'marker' + (i+1);
    markers[number] = new google.maps.Marker({
      position: {lat: place[0], lng: place[1]},
      map: map,
      icon: markerImage,

      option: number
    });

    google.maps.event.addListener(markers[number], 'click', function() {
      addDefaultImg();
      this.setIcon(markerImageHover);

      var selectText = $('[data-option="' + this.option + '"]').text();
      $('.select__value').text(selectText);
      //console.log(selectText);

    });
  }

  markers['marker1'].setIcon(markerImageHover);

  function addDefaultImg() {
  	for (var i = 0; i < places.length; i++) {
        var number = 'marker' + (i+1);
        markers[number].setIcon(markerImage);
      }
  }

  $selectOption.on('click', function() {
  	var thisOption = $(this).data('option');

  	addDefaultImg();

  	markers[thisOption].setIcon(markerImageHover);

  });

})();

(function(){
   var advTop = $('#advantages').offset().top,
       menuHeight = $('#menu').height(),
       anchorFlag = true;

  $('[data-anchor]').each(function(){
    var anchor = $(this).data('anchor');
    var anchorTop = $('#' + anchor).offset().top;
    $('#' + anchor).addClass('section__active');
  });


  $(window).scroll(function(){

    var winST = $(window).scrollTop(),
        winHeight = $(window).height(),
        winBotST = winST + winHeight;

    if(winST >= advTop) {
      $('#menu').addClass('menu__active');
    } else {
      $('#menu').removeClass('menu__active');
    }

    $('.section__active').each(function() {
      var thisTop = $(this).offset().top,
          thisHeight = $(this).outerHeight();

      if( winBotST > thisTop + (thisHeight/2) && winST + menuHeight < thisTop + (thisHeight/2) ) {

        var thisId = $(this).attr('id');
        if(anchorFlag === true) {
          $('[data-anchor]').removeClass('menu__link--active');
          $('[data-anchor="' + thisId + '"]').addClass('menu__link--active');

          // if(window.location.hash != ('#' + thisId) ) {
          //   window.history.replaceState({}, '', '#' + thisId);
          // }
        }


      }
    });

  });

  $('.menu__link').on('click', function(e) {
    e.preventDefault();
    anchorFlag = false;
    var anchor = $(this).data('anchor'),
        to = $('#' + anchor).offset().top - menuHeight;
    $("html, body").animate({scrollTop: to}, 500, function(){
      anchorFlag = true;
    });
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
    window.history.replaceState({}, '', '#' + anchor);
  });




})();
(function() {
  var $btn = $('.js-popup');
  $btn.on('click', function() {
    $('.popup').addClass('popup__active');

    // $('html').css({
    //   'overflow': 'hidden'
    // });

  });

  $('.popup').mouseup(function (e){ // событие клика по веб-документу
        var div = $(".popup__block"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
             $('.popup').removeClass('popup__active');

             // $('html').css({
             //  'overflow': 'visible'
             // });
        }
    });
  $('.popup__close').on('click',function() {
    $('.popup').removeClass('popup__active');

    // $('html').css({
    //   'overflow': 'visible'
    //  });
  });



})();

$(window).on('load' , function() {
    var winHash = window.location.hash,
        menuHeight = $('#menu').height();
    if(winHash !== '') {
      var to = $(winHash).offset().top - menuHeight;
      $("html, body").animate({scrollTop: to}, 500);
    }
});