export default class VirtualDojoClubService {
    _data = {
        club: {
            dojos: [
                {
                    name: "J one",
                    details: "more info",
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
                                    city: "thessaloniki",
                                    info: "championship info"
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
                                    info: "championship info"
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
                                    info: "championship info"
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
                                    info: "championship info"
                                }
                            ]
                        }
                    ],
                    championships : [

                    ]
                },
            ]
        }
    }

    getDojoClub() {
        return this._data
    }
}