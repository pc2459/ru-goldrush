$(document).on('ready', function() {



	// Get the X,Y position when we click on the .map div
	// using pageX and pageY from the event (called e)
	$(".map").on("click",function(e){

		var target = $(e.target);
		console.log(target.attr('class'));

		//If we've clicked on a marker...
		if(target.attr('class') === 'marker-img' ) {
			// Do nothing?
		}
		else{

			// Create a marker in memory
			var marker = $('<div class="marker"><img class="marker-img" src="marker.png"></div>');

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

		}
		

	// Get rid of markers when they're clicked on
	$(".map").on("click",".marker",function(){
		console.log("Clicked on a marker");
		$(this).remove();
	});
	

	});



  
});