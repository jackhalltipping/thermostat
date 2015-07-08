// latitude, longitude =

var latitude;
var longitude;

navigator.geolocation.getCurrentPosition(GetLocation);

function GetLocation(location) {
    console.log(location)
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
}
//
// var coords = variable.split(',', 2);
// var lat  = parseFloat(coords[0]);
// var long = parseFloat(coords[1]);

geocoder = new google.maps.Geocoder();
geocoder.geocode({'latLng': new google.maps.LatLng(latitude, longitude) }, function(results, status) {
  console.log(results[0]);
  $('span#location').html(results[0].formatted_address);
});
