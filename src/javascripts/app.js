var updateDisplay = function() {
  $('#temperature').html(thermostat.temp);
  $('#temperature').css('color', thermostat.colour);
};

thermostat = new Thermostat();
updateDisplay(); // window.onload ...?

// if you can add multiple event listeners at the same time, add up-arrow.
$('#up').click(function() {
  thermostat.increase();
  updateDisplay();
});

$('#down').click(function() {
  thermostat.decrease();
  updateDisplay();
});

$('#reset').click(function() {
  thermostat.resetTemp();
  updateDisplay();
});

$('#powersaver').click(function() {
  thermostat.powerSave = !thermostat.powerSave;
});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=51.51758&lon=-0.073789', function(data) {
  getTemp = data.main.temp;
  var temp=Math.round(getTemp - 272.15);
  $('span#locationTemp').html(temp);
});

// return formatted address for lat/longitude - reverse geocoding with Google Maps API
// adjust thermostat accordingly
