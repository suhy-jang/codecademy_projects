import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './7-airplane.mjs';
import meetsSpeedRangeRequirements from './7-airplane.mjs';
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

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
