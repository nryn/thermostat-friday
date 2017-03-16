debugger;
'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.DEFAULT_CHANGE = 1;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MAX_TEMP_PSM_ON = 25;
  this.LOW_USAGE_THRESHOLD = 18;
  this.MEDIUM_USAGE_THRESHOLD = 25;

  this.currentTemp = this.DEFAULT_TEMP;
  this.powerSavingMode = true;

};

  Thermostat.prototype.getCurrentTemp = function() {
    return this.currentTemp;
  };

  Thermostat.prototype.increaseTemp = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
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

  Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.currentTemp === this.MAX_TEMP_PSM_OFF;
  }
    return this.currentTemp === this.MAX_TEMP_PSM_ON;
  };

  Thermostat.prototype.reset = function() {
    this.currentTemp = this.DEFAULT_TEMP
  };

  Thermostat.prototype.getEnergyUsage = function() {
    if (this.currentTemp < this.LOW_USAGE_THRESHOLD) {
      return 'low-usage';
    }
    else if (this.currentTemp < this.MEDIUM_USAGE_THRESHOLD) {
      return 'medium-usage';
    }
    else {
      return 'high-usage';
    }
  };
