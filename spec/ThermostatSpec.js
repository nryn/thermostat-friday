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

  // As a user
  // So I can know the lowest temperature setting
  // I want to be able to see a minimum temperature
  it('has a minimum temperature of 10 degrees', function() {
  for (var i = 0; i < 10; i++) {
    thermostat.decreaseTemp();
  }
  expect(thermostat.getCurrentTemp()).toEqual(10);
  });


  // As a user
  // So I can save power when using the thermostat
  // I would like to have a power saving mode which is on by default
  it('has a power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });


}); //  Main describe
