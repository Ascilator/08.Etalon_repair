
jQuery(function () {
	
	$('._form').on('focus', function(){		
		if ($(this).val() == 'Имя'  || $(this).val() == 'Телефон') {
			$(this).val('');
		}
	});

	$('._form').on('blur', function(){
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Телефон');
			}
			
		}
	});
	$('.form_slider').bxSlider({
		controls: false,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 500,
		moveSlides: 0,
		swipeThreshold: 100,
	});

	$('.item').on('click', function(){
		if($('body').width() <= 1080){
			$(this).toggleClass('_active');
		}
	});
	$('.recivies_container').bxSlider({
		controls: false,
		minSlides: 1,
		maxSlides: 1,
		
		moveSlides: 0,
		swipeThreshold: 100,
	});
	
/*	if($('body').width()<=735) {
		$('.menu_list').append($('.order_phone'));
		$('.order_phone').addClass('menu_link');
	} 
	if($('body').width()<=455) {
		$('.menu_list').append($('.call_me'));
		$('.call_me').addClass('menu_link');
	} 
	*/
	$('.burger_menu').on('click', function(){
		$('.burger').toggleClass('_active_bu');
		$('.burger_before').toggleClass('_active_bef_bu');
		$('.burger_after').toggleClass('_active_af_bu');
		$('.menu').toggleClass('responsive');
	});
	$(window).resize(function() {
		if($('body').width()<=455 && $('header').children('.call_me')) {
			$('.menu_list').append($('.call_me'));
			$('.call_me').addClass('menu_link');
			
		} else{
			$('.header').append($('.call_me'));
			$('.header').append($('.order_phone'));
			$('.call_me').removeClass('menu_link');
			$('.header').append($('.burger_menu'));	
		}
	});
	function tabs () {
		$(".tab_item").not(":first").hide();
		$(".wrapper .tab").click(function() {
			$(".tab").removeClass("_active").eq($(this).index()).addClass("_active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("_active");
	}
	tabs();

});