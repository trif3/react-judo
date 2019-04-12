export default class DojoService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllAthletes = async () => {
    const res = await this.getResource(`/people/`);
    return res.results
      .map(this._transformAthlete)
      .slice(0, 5);
  };

  getAthlete = async (id) => {
    const athlete = await this.getResource(`/people/${id}/`);
    return this._transformAthlete(athlete);
  };

  getAllTeachers = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results
      .map(this._transformTeacher)
      .slice(0, 5);
  };

  getTeacher = async (id) => {
    const teacher = await this.getResource(`/planets/${id}/`);
    return this._transformTeacher(teacher);
  };

  getAllChampionships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results
      .map(this._transformChampionship)
      .slice(0, 5);
  };

  getChampionship = async (id) => {
    const championship = await this.getResource(`/starships/${id}/`);
    return this._transformChampionship(championship);
  };

  getAthleteImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getChampionshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getTeacherImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformTeacher = (teacher) => {
    return {
      id: this._extractId(teacher),
      name: teacher.name,
      population: teacher.population,
      rotationPeriod: teacher.rotation_period,
      diameter: teacher.diameter
    };
  };

  _transformChampionship = (championship) => {
    return {
      id: this._extractId(championship),
      name: championship.name,
      model: championship.model,
      manufacturer: championship.manufacturer,
      costInCredits: championship.cost_in_credits,
      length: championship.length,
      crew: championship.crew,
      passengers: championship.passengers,
      cargoCapacity: championship.cargo_capacity
    }
  };

  _transformAthlete = (athlete) => {
    return {
      id: this._extractId(athlete),
      name: athlete.name,
      gender: athlete.gender,
      birthYear: athlete.birth_year,
      eyeColor: athlete.eye_color
    }
  }
}
