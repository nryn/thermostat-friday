'use strict';

function Thermostat() {
  this.START_TEMP = 20;
  this.DEFAULT_CHANGE = 1;
  this.MINIMUM_TEMPERATURE = 10;
  this.currentTemp = this.START_TEMP;
  this.powerSavingMode = true;
};

  Thermostat.prototype.getCurrentTemp = function() {
    return this.currentTemp;
  };

  Thermostat.prototype.increaseTemp = function() {
    this.currentTemp += this.DEFAULT_CHANGE;
  };

  Thermostat.prototype.decreaseTemp = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.currentTemp -= this.DEFAULT_CHANGE;
  };

  Thermostat.prototype.isMinimumTemperature = function() {
    return this.currentTemp === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isPowerSavingModeOn = function() {
    return this.powerSavingMode === true;
  };

  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.powerSavingMode = false;
  };

  Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.powerSavingMode = true;
  };
