defaultBodyHeight = 0;

$(window).load(function (){ 

	$('div#recently_work_caption').delay(1000).animate({opacity: 1.0}, 1000);

	$('div.work').each(function(i) {
		i++;		
		$(this).delay(500 * i).animate({opacity: 1.0}, 1000);
	});

	defaultBodyHeight = $('body').height();

	if($('footer').length != 0) {
		putFooterBottom();
	}
});

function putFooterBottom() {
	if($('footer').offset().top < $(window).height()) {
		currentBodyHeight = $('body').height();
		if(currentBodyHeight <= defaultBodyHeight)
			$('body').height((defaultBodyHeight-currentBodyHeight)-$('header').height());
		else
			$('body').height((defaultBodyHeight+currentBodyHeight)-$('header').height());
		$('footer').css({
			'position': 'absolute',
			'bottom': 0
		});
		$('footer').animate({opacity: 1.0}, 1000);
	} else {
		$('body').height(defaultBodyHeight);
		$('footer').css({
			'position': 'static',
		});
		$('footer').animate({opacity: 1.0}, 1000);
	}
}

$(window).on("orientationchange",putFooterBottom);