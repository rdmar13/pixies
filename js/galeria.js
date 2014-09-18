(function($) {
    $('.carousel').carousel();

    
	$('#left-carousel').click(function() {
		$('#carousel-pixies').carousel('prev');
	});

	$('.carousel-control.right').click(function() {
	  $('#carousel-pixies').carousel('next');
	});


})(jQuery);