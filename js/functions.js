 $(function(){
 	mentoring_bubble_click();
 });

// ========= MENTORING SECTION ==========

 function mentoring_bubble_click(){
 	$('.face').on('click', function(){

 		var $this = $(this),
 				face_distance_from_top_of_parent = $this.position().top,
 				vert_distance_to_center = -(face_distance_from_top_of_parent - 200), 				
 				face_distance_from_left_of_parent = $this.position().left,
 				horiz_distance_to_left = -(face_distance_from_left_of_parent);
// window.matchMedia("min-width: 640px").matches
 		if (window.matchMedia("(min-width: 640px)").matches) {

	 		$this.parent().css('top', + vert_distance_to_center + 'px');
	 		$this.addClass('has-bubble-open');

	 	} else {

	 		$this.parent().css('left', + horiz_distance_to_left+ 'px');
	 		$this.addClass('has-bubble-open');
	 	}
	 		$this.siblings().removeClass('has-bubble-open');
	 	}); // end of $('.face').on('click', function(){...}
 } // mentoring_bubble_click()
 
 $('.face:nth-child(3)').addClass('has-bubble-open');

// ========= /MENTORING SECTION ==========




// ========= YOUTUBE SECTION ==========
 $(window).scroll(function(){
 	scrolling_thumbnails_in_YouTube_section();
 });

 function scrolling_thumbnails_in_YouTube_section() {
 	var scroll_position = $(window).scrollTop();

 	$('.video-strip').css('background-position', 'center '+ -scroll_position + 'px');
 }
// ========= /YOUTUBE SECTION ==========