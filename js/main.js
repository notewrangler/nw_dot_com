$('document').ready(function(){

	var s = skrollr.init({
		forceHeight: false,

	});
	$('parallax-window').parallax({
		naturalWidth: 1200,
		naturalHeight: 1600
	});

	$('parallax-portfolio').parallax({
		naturalWidth: 1942,
		naturalHeight: 2913
	});

	$(window).trigger('resize').trigger('scroll');
	// 	$('#me-trig')
	// 	.mouseenter(function(){
	// 		$('#me-trig').css({"font-size": "2.8rem", "color": "#00BCD4"});
	// 		$('#me').toggle("slide", 400);
	// 		})
	// 	.mouseleave(function(){
	// 			$('#me-trig').css({"font-size": "2.5rem", "color": "black"});
	// 			$('#me').hide();
	// 		});
	//
	// 	$('#code-trig')
	// 	.mouseenter(function(){
	// 		$('#code-trig').css({"font-size": "2.8rem", "color": "#00BCD4"});
	// 		$('#code-keys').toggle("blind", 400);
	// 	})
	// 	.mouseleave(function(){
	// 		$('#code-trig').css({"font-size": "2.5rem", "color": "black"});
	// 		$('#code-keys').hide();
	// 	});
	//
	// 	$('#drum-trig')
	// 	.mouseenter(function(){
	// 		$('#drum-trig').css({"font-size": "2.8rem", "color": "#00BCD4"});
	// 		$('#drum').toggle("clip", 400);
	// 	})
	// 	.mouseleave(function(){
	// 			$('#drum-trig').css({"font-size": "2.5rem", "color": "black"});
	// 			$('#drum').hide();
	// 	});
	//
	// 	$('#dot-trig')
	// 	.mouseenter(function(){
	// 		$('#dot-trig').css({"font-size": "2.8rem", "color": "#00BCD4"});
	// 		$('#dots').toggle("clip", 400);
	// 	})
	// 	.mouseleave(function(){
	// 		$('#dot-trig').css({"font-size": "2.5rem", "color": "black"});
	// 		$('#dots').hide();
	// 	});
	//
	// 	$('#app-trig').mouseenter(function(){
	// 		$('#app-trig').css({"font-size": "2.8rem", "color": "color: ##00BCD4"});
	// 		$('#react').toggle("slide", 400);
	// 	})
	// 	.mouseleave(function(){
	// 		$('#app-trig').css({"font-size": "2.5rem", "color": "black"});
	// 		$('#react').hide();
	// });

});
