$('a[href^="#"]').each(function(){
	$(this).on('click', function(){
		var target = $(this.hash);

		if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 700);

			return false;
		}
	})
});

$('.switch-content a').on('click', function(){
	$('.switch-content a').each(function(){
		$(this).parent('.switch-content').toggleClass('hide');
	});

	$('#wedding-page .page-title').toggleClass('hide');
})