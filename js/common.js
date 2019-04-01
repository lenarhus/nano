$(document).ready(function (){

	$(window).on('load resize', function() {
	  if ($(window).width() < 870) {
	    $('.indicator__box:not(.slick-initialized)').slick({
	      centerMode: true,
		  centerPadding: '40px',
	      slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
    	  arrows: false
	    });
	    $('.tablemobile:not(.slick-initialized)').slick({
	      centerMode: true,
		  centerPadding: '40px',
	      slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
    	  arrows: false,
    	  responsive: [
		        {
		          breakpoint: 480,
		          settings: {
		          	centerMode: true,
		            centerPadding: '40px',
		            slidesToShow: 1,
		            slidesToScroll: 1,
		            dots: false,
		        	arrows: false
		          }
		    	}
	     	]	
	    });
	    $('.match-row:not(.slick-initialized)').slick({
	      centerMode: true,
		  centerPadding: '40px',
	      slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
    	  arrows: false
	    });
	    $('.statistic__row:not(.slick-initialized)').slick({
	      centerMode: true,
		  centerPadding: '40px',
	      slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
    	  arrows: false,
    	  responsive: [
		        {
		          breakpoint: 670,
		          settings: {
		          	centerMode: true,
					centerPadding: '40px',
		            slidesToShow: 1,
		            slidesToScroll: 1,
		            dots: false,
		        	arrows: false
		          }
		    	}
	     	]	
	    });
        $('.subscribecontent__statistic:not(.slick-initialized)').slick({
          centerMode: true,
		  centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
          responsive: [
                {
                  breakpoint: 670,
                  settings: {
                  	centerMode: true,
					centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                }
            ]   
        });
        $('.subscribecontent__tariffs:not(.slick-initialized)').slick({
    	  centerMode: true,
		  centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          responsive: [
                {
                  breakpoint: 480,
                  settings: {
                  	centerMode: true,
					centerPadding: '20px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                  }
                }
            ]   
        });
	  } else {
	    $(".indicator__box.slick-initialized").slick("unslick");
	    $(".tablemobile.slick-initialized").slick("unslick");
	    $(".match-row.slick-initialized").slick("unslick");
        $(".statistic__row.slick-initialized").slick("unslick");
        $(".subscribecontent__statistic.slick-initialized").slick("unslick");
	    $(".subscribecontent__tariffs.slick-initialized").slick("unslick");
	  }
	});

	var windowHeight = $(window).height();

    setTimeout(function(){                                               //PRELOADER
        $('.preloader').fadeOut();
    }, 4000);

	$('a[href^="#"]').click(function () {                                //SCROLL TO LABEL      
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('.header__nav-box').css('left', '-100%');
        $('html').animate( { scrollTop: destination }, 1100 );
        return false;        
    });

	$('.header__nav-burger').on('click', function(){
        $('.header__nav-burger').toggleClass('transform');                //ANIMATE BUTTON
    	if($('.header__nav-box').offset().left != 0)
            $('.header__nav-box').css('left', '0');
        else{
            $('.header__nav-box').css('left', '-100%');
        }
    });

    $('.header__nav-link').on('click', function(){
    	if ($(window).width() <= 768) {
            $('.header__nav-burger').removeClass('transform');                //RETURN NAV
        }
    });

    var getAccord = function (){                                          // АККОРДЕОН MAIN PAGE
	  // hide all content
	  $('.statistic__cicle-match').hide();
	  
		$('.statistic__cicle-number').click(function(){
			$('.cicleArrow').removeClass('rotateArrow');
		    $('.statistic__cicle-match').slideUp();		    
		    if(!$(this).next().is(":visible")) {
				$(this).next().slideDown();
				$(this).children(1).eq(1).children().eq(1).addClass('rotateArrow');
			}
		});
	};

	getAccord();

	setTimeout(function(){                                               // ANIMATE FIRE
		$('.indicator__result-bar-fill').css("width", "70%");
	}, 2000);

	setTimeout(function(){                                               // ANIMATE FIRE
		$('#nechet').animate({strokeDashoffset: "-433"}, 1000);
	}, 2000);

    $('.mainheader__user-button').on('click', function(){
        if($('.mainheader__user-menu').width() == 0){
            $('.mainheader__user-menu').css("width", "165px");
        } else{
            $('.mainheader__user-menu').css("width", "0");
        }
    });

    $('.signin').on('click', function(){                                  // ПОЯВЛЕНИЕ ФОРМЫ ВХОДА
        $('.sign').css("width", "100vw");
        $('.mainheader__user-menu').css("width", "0");
    });

    $('.header__nav-button').on('click', function(){                                // ПОЯВЛЕНИЕ ФОРМЫ РЕГИСТРАЦИИ
        $('.signup').css("width", "100vw");
    });

    $('.sign').on('click', function(event){                               // СКРЫТИЕ ФОРМЫ ВХОДА
    	var el=jQuery(event.target);
		if (el.hasClass('sign')) {
			$('.sign').css("width", "0");
		}                
    });

    $('.signup').on('click', function(event){                             // СКРЫТИЕ ФОРМЫ РЕГИСТРАЦИИ
    	var el=jQuery(event.target);
		if (el.hasClass('signup')) {
			$('.signup').css("width", "0");
		}                
    });

    $('.signup__form-select').on('click', function(){                                // ВЫБОР ФОРМЫ РЕГИСТРАЦИИ
       var indexAttr = $(this).data('attr');
        $('.signupSelect').css('display', 'none');
        $('.signup__form-' + indexAttr).css('display', 'block');
    });
    
    $(window).resize(function() {                                         // Появление пунктов навигации при увеличении экрана
        if ($(window).width() > 768) {
            $('.header__nav-box').removeAttr('style');
        }
    });   

    $(window).scroll(function(){
        try{
            var marker = $('.system__searching').offset().top  - windowHeight / 2;    // АНИМАЦИЯ ПОИСКА (ЛЕНДИНГ)            
            if ($(document).scrollTop() >= marker) {        		      
        		$.each($('.system__searching-item'), function(i){ 
        		    var self = $(this);
        		    var searchItem = setInterval(function(){   			
        				self.addClass('itemactive');
        				if($('.system__searching-block').children().eq(4).attr('class') === 'system__searching-item itemactive'){
    				    	$('.system__searching-indicate').css('opacity', '0');
    				    	$('.system__searching-text').css('opacity', '0');
    				    }	
        			}, i * 1000);    			 
        		});        	
            }
        } catch(e){}

        if ($(document).scrollTop() > 0) {                             // MENU FIXED
        	$('.menu').css('padding', '20px 0').css('background', 'rgba(0, 0, 0, 0.7');
        } else {
        	$('.menu').removeAttr('style');
        }

        if ($(document).scrollTop() < $('.rightcontent__match').offset().top - windowHeight / 3) {     // ФИКСАЦИЯ БОКОВОГО МЕНЮ
        	$('.leftcontent__double').css('position', 'fixed').css('left', '0').css('bottom', '0');
        } else {
        	$('.leftcontent__double').removeAttr('style');
        }
    });
});