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
