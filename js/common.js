$(function() {
	$("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
        	title: '<img src="img/logo-header.png" alt="logo">'
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}


var beepOne = $("#beep-one")[0];
$("#sound__img img")
  .mouseenter(function() {
    beepOne.play();
  });

