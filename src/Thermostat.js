'use strict';

function Thermostat() {
  this.START_TEMP = 20;
  this.DEFAULT_CHANGE = 1;
  this.currentTemp = this.START_TEMP;
};

  Thermostat.prototype.getCurrentTemp = function() {
    return this.currentTemp;
  };

  Thermostat.prototype.increaseTemp = function() {
    this.currentTemp += this.DEFAULT_CHANGE;
  }

  Thermostat.prototype.decreaseTemp = function() {
    this.currentTemp -= this.DEFAULT_CHANGE;
  }
