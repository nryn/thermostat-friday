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
  // I would like to have an up function on thermostat

  it('can increase temperature', function() {
    thermostat.upTemp();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

}); //  Main describe
