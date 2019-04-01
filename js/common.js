$(function() {
	$('.custumers__slider').slick({ 
		fade: true
	});

	$('.switch label').on('click', function(){
  		var indicator = $(this).parent('.switch').find('span');
  		if ( $(this).hasClass('right') ){
			$(indicator).addClass('right');
  		} else {
    		$(indicator).removeClass('right');
 	 	}
	});

	$("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
        	title: '<img src="img/logo.png" alt="logo">'
        }
      });

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});


