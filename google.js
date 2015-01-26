function initialize() {
        var mapOptions = {
          center: { lat:40.4840386, lng:-106.8335065},
          zoom: 10
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);