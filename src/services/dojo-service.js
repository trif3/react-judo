export default class DojoService {
    
    _athletes = [
        {
            id: 1, 
            name: 'Jeff Bezos (z)',
            gender: 'male',
            birth: 'January 12 1964',
            eyeColor: 'un'
        },
        {
            id: 2,
            name: 'Linus Torvalds',
            gender: 'male',
            birth: 'December 28 1969',
            eyeColor: 'un'
        }
    ];

    _teachers = [
        {
            id: 1,
            name: 'Jigoro Kano',
            gender: 'male',
            birth: 'December 10 1860',
            trainingPeriod: 'master',
            rank: 'Shihan'
        },
        {
            id: 2,
            name: 'Yamashita Yoshitsugu',
            gender: 'male',
            birth: 'February 16 1865',
            trainingPeriod: 'master',
            rank: 'Judo: 10th dan'
        }
    ]

    _championships = [
        {
            id: 1,
            name: 'World Judo Championship',
            country: 'Japan',
            city: 'Tokyo',
            year: '1956'
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
        return this._teachers[0];
    };

    getAllChampionships = async () => {
        return this._championships;
    };

    getChampionship = async () => {
        return this._championships[0];
    };

    _anyImageUrl = 'https://placeimg.com/400/500/any';
    
    getAthleteImage = () => {
        return this._anyImageUrl;
    };

    getTeacherImage = () => {
        return this._anyImageUrl;
    };

    getChampionshipImage = () => {
        return this._anyImageUrl;
    }

    // _baseUrl = 'https://randomuser.me/api/';

    // async getResource(url) {
    //     const res = await fetch(`${this._baseUrl}${url}`);
    //     if(!res.ok){
    //         throw new Error(`Could not fetch ${url}, received ${res.status}`);
    //     }
    //     return await res.json();
    // }

    // async getAthletes() {
    //     const res = await this.getResource(`?results=5`);
    //     return res.results;
    // }

    // async getAthlete() {
    //     const res = await this.getResource('?gender=female');
    //     return this._transformAthlete(res.results[0]);
    // }

    // _transformAthlete(athlete) {
    //     return {
    //         id: athlete.id.name,
    //         gender: athlete.gender,
    //         name: `${athlete.name.title} ${athlete.name.first} ${athlete.name.last}`,
    //         pic: athlete.picture.medium,
    //         email: athlete.email
    //     }
    // }
}