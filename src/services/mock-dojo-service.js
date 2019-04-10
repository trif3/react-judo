export default class MockDojoService {

    _athletes = [
        {
            id: 1, 
            name: 'Jeff Bezos (mock)',
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
}