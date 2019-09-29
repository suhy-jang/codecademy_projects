class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(numberOfStudents) {
    if (typeof numberOfStudents !== 'number') {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
      return;
    }
    this._numberOfStudents = numberOfStudents;
  }
  quickFacts() {
		console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomPick = Math.floor(Math.random() * substituteTeachers.length - 1);
    return substituteTeachers[randomPick];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

class SchoolCatalog {
  constructor(schools) {
    this._schools = schools;
  }
  get schools() {
    return this._schools;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, gurdian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const teacher = PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(teacher);

const elPaulo = new MiddleSchool('El Paulo', 360);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;

const catalog = new SchoolCatalog([lorraineHansbury, elPaulo, alSmith]);
console.log(catalog.schools);
