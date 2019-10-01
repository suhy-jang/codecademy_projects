import Airplane from './3-airplane.mjs';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(element => {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();
