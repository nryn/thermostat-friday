debugger;
'use strict';

describe('Features', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // As a user
  // So I can see the starting temperature
  // I would like the thermostat to start at 20 degrees

  it('starts thermostat at 20 degrees', function() {
    expect(thermostat.startTemp).toEqual(20);
  });



});
