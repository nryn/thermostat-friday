thermostat = new Thermostat();

var calculateDegrees = function() {
  return (thermostat.getCurrentTemp() - thermostat.MINIMUM_TEMPERATURE) * (180 / (thermostat.MAX_TEMP_PSM_OFF-thermostat.MINIMUM_TEMPERATURE))
}

var moveDial = function(degrees) {
  $('.temp-dial svg').css({'transform' : 'rotate(' + degrees + 'deg)'});
};

var currentTemp = function() {
  $('#current-temp').html(thermostat.getCurrentTemp());
  moveDial(calculateDegrees())
};

//page loads
currentTemp();

//on click
$('#temp-down').click(function() {
  thermostat.decreaseTemp();
  currentTemp();
});

$('#temp-up').click(function() {
  thermostat.increaseTemp();
  currentTemp();
});
