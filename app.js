var updateDisplay = function() {
  $('#temperature').html(thermostat.temp);
  $('#temperature').style.color = thermostat.colour;
};

thermostat = new Thermostat();
updateDisplay(); // window.onload ...?

// if you can add multiple event listeners at the same time, add up-arrow.
document.getElementById('up').addEventListener('click',  function() {
  thermostat.increase();
  updateDisplay();
});

document.getElementById('down').addEventListener('click', function() {
  thermostat.decrease();
  updateDisplay();
});

document.getElementById('reset').addEventListener('click', function() {
  thermostat.resetTemp();
  updateDisplay();
});

document.getElementById('powersaver').addEventListener('click', function() {
  thermostat.powerSave = !thermostat.powerSave;
});
