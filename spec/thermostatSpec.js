describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Standard Functions:", function() {
    it("It has a starting temperature of 20", function() {
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

    it("You can't go below 10 degrees", function() {
      thermostat.down(15)
      expect(thermostat.message).toEqual("Too coooooold!");
    });

    it("when reset button is pressed, temp is 20 ", function() {
      thermostat.reset()
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe("Power Saving Mode", function(){
    it("can be turned off", function() {
      thermostat.powerSaveMode();
      expect(thermostat.powerSave).toEqual(false);
    });

    it("can be turned back on", function() {
      thermostat.powerSaveMode();
      thermostat.powerSaveMode();
      expect(thermostat.powerSave).toEqual(true);
    });

    it("limits the max temp to be 25 when on", function() {
      thermostat.up(10);
      expect(thermostat.message).toEqual("TOO HOT!");
    });

    it("restores the standard max temp of 32 when off", function() {
      thermostat.powerSaveMode()
      thermostat.up(15)
      expect(thermostat.message).toEqual("TOO HOT!");
    });
  });

  describe("Enery Usage property:", function() {
    it("is 'low' when <18", function() {
      thermostat.down(3);
      expect(thermostat.energyUsage).toEqual("low");
    });

    it("is 'medium' when 18", function() {
      thermostat.down(2)
      expect(thermostat.energyUsage).toEqual("medium");
    });

    it("is 'medium' when <25", function() {
      thermostat.up(4)
      expect(thermostat.energyUsage).toEqual("medium");
    });

    it("is 'high' when >=25", function() {
      thermostat.up(5);
      expect(thermostat.energyUsage).toEqual("high");
    });
  });

});
