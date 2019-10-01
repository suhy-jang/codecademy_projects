import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './4-airplane.mjs';
function displayFuelCapacity() {
  availableAirplanes.forEach(element => {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayFuelCapacity();
displayStaffStatus();
