 $(function(){
 	mentoring_bubble_click();
 });

function mentoring_bubble_click(){
	$('.face').on('click', function(){
		$(this).addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');
	});
}

 $(window).scroll(function(){
 	scrolling_thumbnails_in_YouTube_section();
 });

function scrolling_thumbnails_in_YouTube_section() {
	var distance_from_browser_top = $(window).scrollTop();

	$('.video-strip').css('background-position', 'center '+ -distance_from_browser_top + 'px');
}
