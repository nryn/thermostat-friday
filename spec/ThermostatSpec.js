'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // As a user
  // So I can see the starting temperature
  // I would like the thermostat to start at 20 degrees
  it('has a starting temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  // As a user
  // So I increase the temperature
  // I would like to have an increase temperature function on thermostat
  it('can increase temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  // As a user
  // So I increase the temperature
  // I would like to have a decrease temperature function on thermostat
  it('can decrease temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });



}); //  Main describe
