$(document).on('ready', function() {

	// Get the X,Y position when we click on the .map div
	// using pageX and pageY from the event (called e)

	$(".map").on("click",function(e){
		console.log(e.pageX);
		console.log(e.pageY);

		var marker = $('<div class="marker"><img src="marker.png"></div>');

		$(this).append(marker);
		marker.css({
			position: "absolute",
			top: e.pageY - 64,
			left: e.pageX - 32
		});		

	});
  
});