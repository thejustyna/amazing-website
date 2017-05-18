 $(function(){
 	mentoring_bubble_click();
 });

 function mentoring_bubble_click(){
 	$('.face').on('click', function(){

 		var $this = $(this);
 				face_distance_from_top_of_parent = $this.position().top,
 				vertMath = -(face_distance_from_top_of_parent - 200);

 		console.log(vertMath);

 		$this.parent().css('top', + vertMath + 'px');

 		$this.addClass('has-bubble-open')
 		.siblings().removeClass('has-bubble-open');
 	});



 }

 $(window).scroll(function(){
 	scrolling_thumbnails_in_YouTube_section();
 });

 function scrolling_thumbnails_in_YouTube_section() {
 	var scroll_position = $(window).scrollTop();

 	$('.video-strip').css('background-position', 'center '+ -scroll_position + 'px');
 }
