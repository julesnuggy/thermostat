describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20", function () {
    expect(thermostat.temp).toEqual(20);
  });

  it("You can increase the temperature with an `up` function", function () {
      thermostat.up(4);
      expect(thermostat.temp).toEqual(24);
    });

    it("You can decrease the temperature with a `down` function", function () {
        thermostat.down(6);
        expect(thermostat.temp).toEqual(14);
      });
/*  it("...", function () {
    ...;
    expect(...).toEqual(...);
  }); */
});
