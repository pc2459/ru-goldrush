function initialize() {

  var markers = [];
  var uniqueId = 1;

  var mapOptions = {
    center: { lat:40.4840386, lng:-106.8335065},
    zoom: 10
  };

  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  google.maps.event.addListener(map, 'click', function(event) {
      addMarker(event.latLng);
    });

  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    google.maps.event.addListener(marker, "click", function (e) {
        DeleteMarker(marker.id);
    });
    
    marker.id = uniqueId;
    uniqueId++;
    markers.push(marker); 
  }

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


google.maps.event.addDomListener(window, 'load', initialize);