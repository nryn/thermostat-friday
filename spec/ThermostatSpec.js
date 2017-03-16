'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // As a user
  // So I can see the starting temperature
  // I would like the thermostat to start at 20 degrees
  it('has a starting temperature', function() {
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP);
  });

  // As a user
  // So I increase the temperature
  // I would like to have an increase temperature function on thermostat
  it('can increase temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP + 1);
  });

  // As a user
  // So I increase the temperature
  // I would like to have a decrease temperature function on thermostat
  it('can decrease temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP - 1);
  });

  // As a user
  // So I can know the lowest temperature setting
  // I want to be able to see a minimum temperature
  it('has a minimum temperature', function() {
  for (var i = 0; i < 10; i++) {
    thermostat.decreaseTemp();
  }
  expect(thermostat.getCurrentTemp()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

  // As a user
  // So I can save power when using the thermostat
  // I would like to have a power saving mode which is on by default
  it('has a power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  // As a user
  // So I can choose between different power modes
  // I would like to be able to switch power saving mode off
  it('can switch power saving mode off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  // As a user
  // So I can choose between different power modes
  // I would like to be able to switch back to power saving mode on
  it('can switch back to power saving mode on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  // As a user
  // So I can choose between different power modes
  // I would like to see a maximum temperature when power saving mode is on
  describe('when power saving mode on', function() {
      it('has a maximum temperature ', function() {
        for (var i = 0; i < 10; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.getCurrentTemp()).toEqual(thermostat.MAX_TEMP_PSM_ON);
      });
  });

  // As a user
  // So I can choose between different power modes
  // I would like to see a maximum temperature when power saving mode is off
  describe('when power saving mode off', function() {
      it('has a maximum temperature', function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 20; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.getCurrentTemp()).toEqual(thermostat.MAX_TEMP_PSM_OFF);
      });
  });

  // As a user
  // So I can set the temperature to default
  // I would like to be able to reset the temperature
  it('can reset the temperature', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.increaseTemp();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP);
  });

  // As a user
  // So I can monitor the energy usage
  // I would like to be able to see the level of energy usage
  it('shows current energy usage', function() {
    thermostat.currentTemp = thermostat.LOW_USAGE_THRESHOLD - 1
    expect(thermostat.getEnergyUsage()).toEqual('low-usage');
    thermostat.currentTemp = thermostat.MEDIUM_USAGE_THRESHOLD - 1
    expect(thermostat.getEnergyUsage()).toEqual('medium-usage');
    thermostat.currentTemp = thermostat.MEDIUM_USAGE_THRESHOLD + 1
    expect(thermostat.getEnergyUsage()).toEqual('high-usage');
  });
});
