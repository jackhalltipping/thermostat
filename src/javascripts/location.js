navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation(location) {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    return(latitude, longitude);
}
