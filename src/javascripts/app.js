var updateDisplay = function() {
  $('#temperature').html(thermostat.temp);
  $('#temperature').css('color', thermostat.colour);
};

thermostat = new Thermostat();
updateDisplay();

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

$('#powerSaveMode').click(function() {
  thermostat.changeMode();
  updateDisplay();
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=51.51758&lon=-0.073789', function(data) {
  getTemp = data.main.temp;
  var temp=Math.round(getTemp - 272.15);
  $('span#locationTemp').html(temp);
});
