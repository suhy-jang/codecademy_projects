export let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators',
    ],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: [
      'pilots',
      'flightAttendants',
    ],
    maxSpeed: 800,
    minSpeed: 200
  }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
 return (availableStaff.length >= requiredStaff);
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  return range > requiredSpeedRange
}

export default meetsSpeedRangeRequirements;
