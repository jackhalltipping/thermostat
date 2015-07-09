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
