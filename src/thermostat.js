function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSave = true;
  this.energyUsage = "medium";
  this.message = "That's a goooood temperature";
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
  this.powerSave = true;
  this.energyUsageCheck();
  this.message = "Thermostat reset";
};

Thermostat.prototype.powerSaveMode = function() {
  if (this.powerSave === true) {
    this.powerSave = false;
    this.maxTemp = 32;
  } else {
    this.powerSave = true;
    this.maxTemp = 25;
    this.temp > this.maxTemp ? this.temp = this.maxTemp : this.temp
  }
};

Thermostat.prototype.up = function(number) {
  var result = this.temp + number;

  try {
    if (result > this.maxTemp) throw "TOO HOT!";
    if (this.temp += number) throw "That's a goooood temperature";
  }
  catch(err) {
    this.message = err;
  }

  this.energyUsageCheck();
};

Thermostat.prototype.down = function(number) {
  result = this.temp - number;

  try {
    if (result < this.minTemp) throw "Too coooooold!";
    if (this.temp -= number) throw "That's a goooood temperature";
  }
  catch(err) {
    this.message = err;
  }

  this.energyUsageCheck();
};

Thermostat.prototype.energyUsageCheck = function() {
  if (this.temp < 18) {
    this.energyUsage = "low";
  } else if (this.temp >= 18 && this.temp < 25) {
    this.energyUsage = "medium";
  } else {
    this.energyUsage = "high";
  }
};
