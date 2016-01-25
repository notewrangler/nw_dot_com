$('document').ready(function(){

		$('#me-trig')
		.mouseenter(function(){
			$('#me-trig').css({"font-size": "2.1rem", "color": "#00BCD4"});
			$('#me').fadeIn(400);
			})
		.mouseleave(function(){
				$('#me-trig').css({"font-size": "1.8rem", "color": "black"});
				$('#me').hide();
			});

		$('#code-trig')
		.mouseenter(function(){
			$('#code-trig').css({"font-size": "2.1rem", "color": "#00BCD4"});
			$('#code-boy').fadeIn(400);
		})
		.mouseleave(function(){
			$('#code-trig').css({"font-size": "1.8rem", "color": "black"});
			$('#code-boy').hide();
		});

		$('#drum-trig')
		.mouseenter(function(){
			$('#drum-trig').css({"font-size": "2.1rem", "color": "#00BCD4"});
			$('#drum').fadeIn(400);
		})
		.mouseleave(function(){
				$('#drum-trig').css({"font-size": "1.8rem", "color": "black"});
				$('#drum').hide();
		});

		$('#dot-trig')
		.mouseenter(function(){
			$('#dot-trig').css({"font-size": "2.1rem", "color": "#00BCD4"});
			$('#dots').fadeIn(400);
		})
		.mouseleave(function(){
			$('#dot-trig').css({"font-size": "1.8rem", "color": "black"});
			$('#dots').hide();
		});

		$('#app-trig').mouseenter(function(){
			$('#work-trig').css({"font-size": "2.1rem", "color": "color: #E91E63"});
			$('#react').fadeIn(400);
		})
		.mouseleave(function(){
			$('#work-trig').css({"font-size": "1.8rem", "color": "black"});
			$('#react').hide();
	});

});
