thermostat = new Thermostat();

var calculateDegrees = function() {
  return (thermostat.getCurrentTemp() - thermostat.MINIMUM_TEMPERATURE) * (180 / (thermostat.MAX_TEMP_PSM_OFF-thermostat.MINIMUM_TEMPERATURE))
}

var moveDial = function(degrees) {
  $('.temp-dial svg').css({'transform' : 'rotate(' + degrees + 'deg)'});
};

var setTemp = function() {
  $('#current-temp').html(thermostat.getCurrentTemp());
  moveDial(calculateDegrees())
};

//page loads
setTemp();

//on click
$('#temp-down').click(function() {
  thermostat.decreaseTemp();
  setTemp();
});

$('#temp-up').click(function() {
  thermostat.increaseTemp();
  setTemp();
});

$('#reset').click(function(){
  thermostat.reset();
  setTemp();
});

$('#power-save').click(function(){
  console.log(thermostat.isPowerSavingModeOn());
  thermostat.isPowerSavingModeOn() ? thermostat.switchPowerSavingModeOff() : thermostat.switchPowerSavingModeOn();
  setTemp();
});
