export default class DojoService {

    _baseUrl = 'https://randomuser.me/api/';

    async getResource(url) {
        const res = await fetch(`${this._baseUrl}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAthletes() {
        const res = await this.getResource(`?results=5`);
        return res.results;
    }

    async getAthlete() {
        const res = await this.getResource('?gender=female');
        return this._transformAthlete(res.results[0]);
    }

    _transformAthlete(athlete) {
        return {
            id: athlete.id.name,
            gender: athlete.gender,
            name: `${athlete.name.title} ${athlete.name.first} ${athlete.name.last}`,
            pic: athlete.picture.medium,
            email: athlete.email
        }
    }
}