// latitude, longitude =

var latitude;
var longitude;

navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation(location) {
    latitiude = (location.coords.latitude);
    longitude = (location.coords.longitude);
    getAddress(latitiude, longitude);
}

//
// var coords = variable.split(',', 2);
// var lat  = parseFloat(coords[0]);
// var long = parseFloat(coords[1]);

function getAddress(latitude, longitude) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'latLng': new google.maps.LatLng(latitiude, longitude) }, function(results, status) {
    $('span#location').html(results[0].formatted_address);
  });
}
