let availableAirplanes = [
  {
    name: 'AeroJet',
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators',
    ],
    fuelCapacity: 800,
  },
  {
    name: 'SkyJet',
    availableStaff: [
      'pilots',
      'flightAttendants',
    ],
    fuelCapacity: 500,
  }
];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
 return (availableStaff.length >= requiredStaff);
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements };
