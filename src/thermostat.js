function Thermostat() {

  this.powerSave = true

  if (this.powerSave) {
    this.maxTemp = 25
  } else {
    this.maxTemp = 32
  }
  this.temp = 20;
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
};

Thermostat.prototype.down = function(number) {

  result = this.temp - number

  if (result < 10) {
    return "Minimum temp reached"
  } else {
    this.temp -= number;
  }
};