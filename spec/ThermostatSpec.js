describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees ', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases the temp with the up button', function() {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases the temp with the down button', function() {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });
});
