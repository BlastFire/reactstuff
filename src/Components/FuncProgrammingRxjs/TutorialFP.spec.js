
describe('Testing http://reactivex.io/learnrx/', () => {

    Array.prototype.concatAll = function () {
        var res = []
        this.forEach(subArr => {
            res.push.apply(res, subArr)
        })
        return res
    }

    Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
        return this.map(function (item) {
            return projectionFunctionThatReturnsArray(item)
        }).concatAll()
    }

    Array.prototype.reduce = function (combiner, initialValue) {
        var counter,
            accumulatedValue;

        // If the array is empty, do nothing
        if (this.length === 0) {
            return this;
        }
        else {
            // If the user didn't pass an initial value, use the first item.
            if (arguments.length === 1) {
                counter = 1;
                accumulatedValue = this[0];
            }
            else if (arguments.length >= 2) {
                counter = 0;
                accumulatedValue = initialValue;
            }
            else {
                throw "Invalid arguments.";
            }

            // Loop through the array, feeding the current value and the result of
            // the previous computation back into the combiner function until
            // we've exhausted the entire array and are left with only one value.
            while (counter < this.length) {
                accumulatedValue = combiner(accumulatedValue, this[counter])
                counter++;
            }

            return [accumulatedValue];
        }
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

    test('concatMap', () => {
        const start = [["cero", "rien", "zero"], ["uno", "un", "one"], ["dos", "deux", "two"]];
        const end = ["cero", "rien", "zero", "uno", "un", "one", "dos", "deux", "two"]
        const entryPoint = [0, 1, 2]

        const result = entryPoint.concatMap(index => start[index])

        expect(result).toEqual(end)
    })

    test('Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video', () => {
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

        const result = start.concatMap(ml =>
            ml.videos.concatMap(video => video.boxarts.filter(boxart => boxart.width === 150)
                .map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }))))

        expect(result).toEqual(end)

    })

    test('Exercise 17: Retrieve the largest rating', () => {
        const start = [2, 3, 1, 4, 5]
        const end = [5]

        const reducer = (acc, cur) => acc > cur ? acc : cur

        const result = start.reduce(reducer)

        expect(result).toEqual(end)
    })

    test('Exercise 18: Retrieve url of the largest boxart', () => {
        const start = [
            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
            { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
        ]
        const end = ["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"]

        const reducer = (acc, cur) => acc.width * acc.height > cur.width * cur.height ? acc : cur

        const result = start.reduce(reducer).map(x => x.url)
    })

    test('Exercise 19: Reducing with an initial value', () => {
        const start = [
            {
                "id": 65432445,
                "title": "The Chamber"
            },
            {
                "id": 675465,
                "title": "Fracture"
            },
            {
                "id": 70111470,
                "title": "Die Hard"
            },
            {
                "id": 654356453,
                "title": "Bad Boys"
            }
        ]

        const end = [
            {
                "65432445": "The Chamber",
                "675465": "Fracture",
                "70111470": "Die Hard",
                "654356453": "Bad Boys"
            }
        ]

        const reducer = (acc, cur) => {
            const id = cur.id
            const val = cur.title
            return { ...acc, [id]: val }
        }
        const result = start.reduce(reducer, {})

        expect(result).toEqual(end)

    })
})