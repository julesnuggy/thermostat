function Thermostat() {
  this.temp = 20;

  this.powerSave = true
  this.energyUsage = "medium-usage";

  if (this.powerSave) {
    this.maxTemp = 25
  } else {
    this.maxTemp = 32
  }

};

Thermostat.prototype.reset = function() {
  this.temp = 20
};

Thermostat.prototype.powerSaveMode = function(bool) {
  if (bool) {
    this.powerSave = true
  } else {
    this.powerSave = false
  }
};

Thermostat.prototype.up = function(number) {

  result = this.temp + number

  if (result > this.maxTemp) {
    return "Max temp reached";
  } else {
    this.temp += number;
  }

  this.energyUsageCheck()
};

Thermostat.prototype.down = function(number) {

  result = this.temp - number

  if (result < 10) {
    return "Minimum temp reached"
  } else {
    this.temp -= number;
  }

  this.energyUsageCheck()
};

Thermostat.prototype.energyUsageCheck = function() {
  if (this.temp < 18) {
    this.energyUsage = "low-usage";
  } else if (this.temp > 18 && this.temp < 25) {
    this.energyUsage = "medium-usage";
  } else {
    this.energyUsage = "high-usage";
  }
}
