export default class VirtualDojoClubService {
    _data = {
        club: {
            dojos: [
                {
                    id: 1,
                    name: "Dojo One",
                    details: "Dojo one is the main dojo",
                    brandImage: 'https://judosport.gr/static/media/logo.86fd73e8.svg',
                    address: "Thessaloniki, Ampelokipoi, Alexander the Great Stadium",
                    rate: 5,
                    athletes: [
                        {
                            id: 1,
                            name: "Jenny",
                            gender: "ms",
                            age: 24,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "Thessaloniki",
                                    info: "Thessaloniki Championship",
                                    kg: 50
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: "Penny",
                            gender: "ms",
                            age: 26,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "LA",
                                    info: "Thessaloniki Championship",
                                    kg: 62
                                }
                            ]
                        }
                    ],
                    teachers: [
                        {
                            id: 3,
                            name: "Fenny",
                            gender: "ms",
                            age: 38,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "Ath",
                                    info: "Japan Championship",
                                    kg: 50
                                }
                            ]
                        },                    
                        {
                            id: 4,
                            name: "Lenny",
                            gender: "ms",
                            age: 40,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "RU",
                                    info: "Russian Championship",
                                    kg: 50
                                }
                            ]
                        }
                    ],
                    championships : [
                        {
                            id: 5, 
                            name: "Thessaloniki Championship Mega Ippon",
                            city: "Thessaloniki",
                            country: "Greece",
                            date: "2015-05-06"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Dojo Second",
                    details: "Dojo Second is the second dojo",
                    brandImage: 'https://judosport.gr/static/media/logo.86fd73e8.svg',
                    address: "Athens, Acropolis",
                    rate:5,
                    athletes: [
                        {
                            id: 1,
                            name: "Lenny",
                            gender: "ms",
                            age: 24,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "Thessaloniki",
                                    info: "Thessaloniki Championship",
                                    kg: 50
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: "Kenny",
                            gender: "ms",
                            age: 26,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "LA",
                                    info: "Thessaloniki Championship",
                                    kg: 62
                                }
                            ]
                        }
                    ],
                    teachers: [
                        {
                            id: 3,
                            name: "Tenny",
                            gender: "ms",
                            age: 38,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "Ath",
                                    info: "Japan Championship",
                                    kg: 50
                                }
                            ]
                        },                    
                        {
                            id: 4,
                            name: "Menny",
                            gender: "ms",
                            age: 40,
                            distinction: [
                                {
                                    medal: "gold",
                                    date: "2019-01-01",
                                    city: "RU",
                                    info: "Russian Championship",
                                    kg: 50
                                }
                            ]
                        }
                    ],
                    championships : [
                        {
                            id: 5, 
                            name: "Thessaloniki Championship Mega Ippon",
                            city: "Thessaloniki",
                            country: "Greece",
                            date: "2015-05-06"
                        }
                    ]
                },
            ]
        }
    }

    getDojoClub() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //Throw error 1/4 times. just for fun!
                if(Math.random() > 0.75) { 
                    reject(new Error('Gobnik'))
                } else {
                    resolve(this._data)
                }
            }, 700)
        });
    }
}