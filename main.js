$(document).on('ready', function() {



	// Get the X,Y position when we click on the .map div
	// using pageX and pageY from the event (called e)
	$(".map").on("click",function(e){

		var target = $(e.target);

		console.log(target.attr('class'));

		//If we've clicked on a marker...
		if(target.attr('class') === 'marker-img' || target.attr('class') === 'note-input' ) {
			// Do nothing?
		}

		else{

			// Create a marker in memory
			var marker = $('<div class="marker"><img class="marker-img" src="marker.png"></div>');
			var note = $('<div class="note">');
			note.append('<textarea rows="4" cols="15" class="note-input">Enter a note here...</textarea>');
			// note.append('<a href="#">Close</a>');

			marker.append(note);



			// Add the marker to the DOM
			$(this).append(marker);
			

			// Position the marker absolutely
			marker.css({
				position: "absolute",
				// Compensate 64px from the top and 32px from the side
				// to get the tip of the marker exactly at the mousetip
				top: e.pageY - 64, 
				left: e.pageX - 32
			});	

			$(".note-input").focus();

			// Make the note disappear once the user is done typing and clicks off
			$(".note-input").blur(function(){
				console.log("User has clicked away from the textbox");
				$(".note").hide();
			});

		}

	// Show the note on hover over the marker
	$(".marker").on("mouseenter",function(){
		$(this).find(".note").show();
		$(".marker").on("mouseleave",function(){
			$(this).find(".note").hide();
		});
	});



		// Get rid of markers when they're clicked on
	$(".map").on("click",".marker-img",function(){
		console.log("Clicked on a marker!!");
		$(this).parent().remove();
	});

	});



  
});