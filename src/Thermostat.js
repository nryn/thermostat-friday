'use strict';

function Thermostat() {
  this.startTemp = 20;
};

  Thermostat.prototype.getCurrentTemp = function() {
    return this.startTemp;
  };

  Thermostat.prototype.upTemp = function() {
    this.startTemp += 1;
  }
