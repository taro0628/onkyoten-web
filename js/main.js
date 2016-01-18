$(function(){
	var body = $('html,body');
	var nav = $('nav');
	var offset = nav.offset();
	var NavHeight = nav.outerHeight();

	$(window).scroll(function(){
	if($(window).scrollTop() > offset.top) {
		nav.addClass('fixed');
	} else {
		nav.removeClass('fixed');
	}
	});

	$('nav ul li :eq(0)').click(function(evt){
		evt.preventDefault();
		body.animate({scrollTop: 0}, 1000);
	});
	$('nav ul li :eq(1)').click(function(evt){
		evt.preventDefault();
		var destTop = $('#about').offset().top;
		if(nav.hasClass('fixed') != true){
			destTop -= NavHeight;
		}
		body.animate({scrollTop: destTop -85}, 1000);
		
	});
	$('nav ul li :eq(2)').click(function(evt){
		evt.preventDefault();
		var destTop = $('#contents').offset().top;
		if(nav.hasClass('fixed') != true){
			destTop -= NavHeight;
		}
		body.animate({scrollTop: destTop -85}, 1000);
		
	});
	$('nav ul li :eq(3)').click(function(evt){
		evt.preventDefault();
		var destTop = $('#access').offset().top;
		if(nav.hasClass('fixed') != true){
			destTop -= NavHeight;
		}
		body.animate({scrollTop: destTop -85}, 1000);
		
	});
	$('nav ul li :eq(4)').click(function(evt){
		evt.preventDefault();
		var destTop = $('#contact').offset().top;
		if(nav.hasClass('fixed') != true){
			destTop -= NavHeight;
		}
		body.animate({scrollTop: destTop -85}, 1000);
		
	});
});
