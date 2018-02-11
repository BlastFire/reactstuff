
describe('Testing http://reactivex.io/learnrx/', () => {

    Array.prototype.concatAll = function () {
        var res = []
        this.forEach(subArr => {
            res.push.apply(res, subArr)
        })
        return res
    }


    test.skip('Not pass', () => {
        const x = 5
        expect(x).toEqual(3)
    })

    test('Exercise 12: Retrieve id, title, and a 150x200 box art url for every video', () => {

        const start = [
            {
                name: "Instant Queue",
                videos: [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxarts": [
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxarts": [
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            },
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxarts": [
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxarts": [
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            }
        ]

        const end = [
            { "id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { "id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
            { "id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { "id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" }
        ]

        const result = start.map(ml =>
            ml.videos.map(video =>
                video.boxarts.filter(boxart =>
                    boxart.width === 150
                ).map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }))).concatAll()
        ).concatAll()

        expect(result).toEqual(end)




    })

})