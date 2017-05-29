
 $(window).scroll(function(){
 	scrolling_thumbnails_in_YouTube_section();
 	show_up_bubbles();
 	startArticles();
 });

// ========= YOUTUBE SECTION ==========
 function scrolling_thumbnails_in_YouTube_section() {
 	var scroll_position = $(window).scrollTop();
 	if (window.matchMedia("(min-width: 640px)").matches) {
 		
 	$('.video-strip').css('background-position', 'center '+ -scroll_position + 'px'); }
 }
// ========= /YOUTUBE SECTION ==========

 $(function(){
 	mentoring_bubble_click();
 	back_btn_click();
 	setInterval(function(){articleTada()}, 4000);
 	
 	// articleTada();
 });

// ========= MENTORING SECTION ==========

function show_up_bubbles() {
	var scroll_position = $(window).scrollTop();

	if($('section.mentoring').offset().top - $(window).height()/2 < scroll_position) {
		
		if ( window.matchMedia("(min-width: 640px)").matches ) {
		$('.faces').addClass('launched');

			if ( ! $('.face').hasClass('has-bubble-open') ) {
				setTimeout( function (){
				 $('.face:nth-child(3)').addClass('has-bubble-open');}, 400);
			} 
		} else {
			mentoring_section_narrow_start();
		}
	}
}


 function mentoring_bubble_click(){
 	$('.face').on('click', function(){

 		var $this = $(this),
 				face_distance_from_top_of_parent = $this.position().top,
 				vert_distance_to_center = -(face_distance_from_top_of_parent - 200), 				
 				face_distance_from_left_of_parent = $this.position().left,
 				horiz_distance_to_left = -(face_distance_from_left_of_parent);
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

 function back_btn_click(){
 	$('.face.back-btn').on('click', function(){
 		mentoring_section_narrow_start();
 	}); 
 } // back_btn_click()

function mentoring_section_wide_start(){
		$('.faces').css( {
		'top': '0px',
		'left' : '0px'
	});	
	$('.face:nth-child(3)').addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}

function mentoring_section_narrow_start(){
	$('.faces').css( {
		'top': '230px',
		'left' : '0px'
	});	
	$('.face').first().addClass('has-bubble-open')
	.siblings().removeClass('has-bubble-open');
}


$(window).resize(function() {

	var media = window.matchMedia("(max-width: 640px)").matches;
	var width = $(window).width();

			 if (media) {
				mentoring_section_narrow_start();
			} 
});

$(window).resize(function() {

	var media = window.matchMedia("(min-width: 640px)").matches;
	var width = $(window).width();

			 if (media) {
				mentoring_section_wide_start();
			}
});

// ========= /MENTORING SECTION ==========


// ========= ARTICLES SECTION ==========
 
function articleTada(){

	var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1;
	$('.article-thumb').eq(randNum).addClass('is-emph')
	.siblings().removeClass('is-emph');

}

function startArticles(){

	var scroll_position = $(window).scrollTop();
 	if ($('section.articles').offset().top - $(window).height()/2 < scroll_position) {
 		
 		$('.article-thumb').each(function(i){

 		setTimeout(function(){$('.article-thumb').eq(i).addClass('is-visible');}, 60 * i);

 		});
	}
}