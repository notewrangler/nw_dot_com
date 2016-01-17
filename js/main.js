$('document').ready(function(){

		$('#me-trig')
		.mouseenter(function(){
			$('#me-trig').css({"font-size": "2.5rem", "color": "#00BCD4"});
			$('#me').fadeIn(400);
			})
		.mouseleave(function(){
				$('#me-trig').css({"font-size": "1.8rem", "color": "black"});
				$('#me').hide();
			});

		$('#code-trig')
		.mouseenter(function(){
			$('#code-trig').css({"font-size": "2.5rem", "color": "#00BCD4"});
			$('#code-boy').fadeIn(400);
		})
		.mouseleave(function(){
			$('#code-trig').css({"font-size": "1.8rem", "color": "black"});
			$('#code-boy').fadeOut(200);
		});

		$('#drum-trig')
		.mouseenter(function(){
			$('#drum-trig').css({"font-size": "2.5rem", "color": "#00BCD4"});
			$('#drum').fadeIn(400);
		})
		.mouseleave(function(){
				$('#drum-trig').css({"font-size": "1.8rem", "color": "black"});
				$('#drum').fadeOut(200);
		});

		$('#dot-trig')
		.mouseenter(function(){
			$('#dot-trig').css({"font-size": "2.5rem", "color": "#00BCD4"});
			$('#dots').fadeIn(400);
		})
		.mouseleave(function(){
			$('#dot-trig').css({"font-size": "1.8rem", "color": "black"});
			$('#dots').fadeOut(300);
		});

});
