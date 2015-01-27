function initialize() {

  // Create an array of markers
  var markers = [];
  // Each of which have a uniqueID
  var uniqueId = 1;

  // Map options here
  var mapOptions = {
    center: { lat:40.4840386, lng:-106.8335065},
    zoom: 10
  };

  // Create a new map that gets injected into #map in our HTML
  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  // On #map click, call the addMarker function to add a marker...
  google.maps.event.addListener(map, 'click', function(event) {
      addMarker(event.latLng);
    });

  // addMarker function 
  function addMarker(location) {
    // Create new marker at event click location and inject into map
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    // Give each marker a unique ID and push it into the array so
    // that it can be found and deleted later
    marker.id = uniqueId;
    uniqueId++;
    markers.push(marker); 

    // Create event listener to delete marker on click
    google.maps.event.addListener(marker, "click", function (e) {
        DeleteMarker(marker.id);
    });
    

    // Prompt user to give each marker a note
    var content = prompt("Enter a note here...");

    // Save the note in an infowindow
    var infowindow = new google.maps.InfoWindow({
      content: content
    });

    // Show infowindow on MOUSEOVER 
    google.maps.event.addListener(marker, "mouseover", function (e) {
      infowindow.open(map,marker);
    });

  }


  // Deletemarker function
  function DeleteMarker(id) {
      //Find and remove the marker from the Array
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].id == id) {
          //Remove the marker from Map                  
          markers[i].setMap(null);

          //Remove the marker from array.
          markers.splice(i, 1);
          return;
      }
  }
}

} //End initialise

// Load it into DOM
google.maps.event.addDomListener(window, 'load', initialize);