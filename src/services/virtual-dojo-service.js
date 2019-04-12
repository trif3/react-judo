export default class VirtualDojoService {

  _athletes = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

  _teachers = [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _championship = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  getAllAthletes = async () => {
    return this._athletes;
  };

  getAthlete = async () => {
    return this._athletes[0];
  };

  getAllTeachers = async () => {
    return this._teachers;
  };

  getTeacher = async () => {
    return this._teachers[0]
  };

  getAllChampionships = async () => {
    return this._championship;
  };

  getChampionship = async () => {
    return this._championship[0];
  };

  getAthleteImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getChampionshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getTeacherImage = () => {
    return `https://placeimg.com/400/400/nature`
  };
}
