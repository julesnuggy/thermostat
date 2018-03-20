describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("You can increase the temperature with an `up` function", function() {
    thermostat.up(4);
    expect(thermostat.temp).toEqual(24);
  });

  it("You can decrease the temperature with a `down` function", function() {
    thermostat.down(6);
    expect(thermostat.temp).toEqual(14);
  });

  it("You cant go below 10 degrees on the thermostat", function() {

    expect(thermostat.down(15)).toEqual("Minimum temp reached");
  });

  it("I can turn on power saving mode", function() {
    thermostat.powerSaveMode(true)
    expect(thermostat.powerSave).toEqual(true);
  });

  it("I can turn off power saving mode", function() {
    thermostat.powerSaveMode(false)
    expect(thermostat.powerSave).toEqual(false);
  });

  it("when powerSaveMode is on, max temp is 25 ", function() {
    thermostat.powerSaveMode(true)
    expect(thermostat.up(10)).toEqual("Max temp reached");
  });

  it("when powerSaveMode is of, max temp is 32 ", function() {
    thermostat.powerSaveMode(false)
    expect(thermostat.up(15)).toEqual("Max temp reached");
  });

  it("when reset button is pressed, temp is 20 ", function() {
    thermostat.reset()
    expect(thermostat.temp).toEqual(20);
  });


});