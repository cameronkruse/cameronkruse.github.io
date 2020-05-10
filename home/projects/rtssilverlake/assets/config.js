var config = {
    style: 'mapbox://styles/highestroad/ck9jfwr6b0rjg1ip36kxvvzb4',
    accessToken:'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2s3aThzNG83MDd0aTNkbXFzYTR2cDFubyJ9.nH9oMLxE5jwM0DuTxbZ2UA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    // title: 'Run The Stairs',
    // subtitle: 'My quest to run all the stairs',
    // byline: 'Cameron Kruse',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'background',
            title: 'Los Angeles, CA',
            // image: './path/to/image/source.png',
            description: "So I live in Los Angeles, specifically the neighborhood of Silverlake in Los Angeles. It is east of downtown just southwest of Dodger stadium. To help me on my journey I built a map with Mapbox to find all the stairs and highlight other geographic features that would help me on my way.",
            location: {
              center: [-118.26555, 33.93443],
              zoom: 9.61,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'rule1',
            title: 'Rule 1 - Run Up',
            // image: './path/to/image/source.png',
            description: 'Climb every staircase in Silverlake. Depending on how you count them there are about 40. I have to go from the bottom to the top of each one, but can go down the stairs before or after need be.',
            location: {
              center: [-118.26876, 34.09305],
              zoom: 13.19,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'rule2',
            title: 'Rule 2 - Skip the Closed Ones',
            // image: './path/to/image/source.png',
            description: 'If a staircase is fenced off you can skip it, but must at least get to the base. I had heard rumors that some staircases may be closed off, but would have to find out for myself.',
            location: {
              center: [-118.26876, 34.09305],
              zoom: 13.19,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                // layer: 'runtrack',
                // opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'rule3',
            title: 'Rule 3 - Wear a Mask',
            image: './assets/images/rts-19.jpg',
            description: 'Wear a mask when people were around. I ran this during the COVID-19 Quarantine.',
            location: {
              center: [-118.26876, 34.09305],
              zoom: 13.19,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'start',
            title: 'Ready, Set, Go',
            image: './assets/images/rtsmap.jpg',
            description: 'I printed out a screenshot of the map I made, sketched out a back of the napkin 40 way travelling salesman math problem, and set out to run the stairs.',
            location: {
              center: [-118.27424, 34.09005],
              zoom: 17.16,
              pitch: 0.00,
              bearing: -151.20
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair1',
            title: 'Staircase 1',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.27405, 34.08813],
              zoom: 17.16,
              pitch: 0.00,
              bearing: 63.12
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair2',
            title: 'Staircase 2',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.27245, 34.09023],
              zoom: 17.16,
              pitch: 0.00,
              bearing: 113.52
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair3',
            title: 'Staircase 3',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.27067, 34.09047],
              zoom: 17.16,
              pitch: 2.50,
              bearing: -55.28
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair4',
            title: 'Staircase 4',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.26883, 34.09146],
              zoom: 17.16,
              pitch: 10.00,
              bearing: -58.48
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair5',
            title: 'Staircase 5',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.26695, 34.09528],
              zoom: 17.16,
              pitch: 24.50,
              bearing: -85.68
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair6',
            title: 'Staircase 6',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.26691, 34.09922],
              zoom: 17.16,
              pitch: 0.00,
              bearing: -88.89
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair7',
            title: 'Staircase 7',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.26991, 34.10264],
              zoom: 17.16,
              pitch: 12.00,
              bearing: 33.58
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair8',
            title: 'Staircase 8',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.26810, 34.10398],
              zoom: 17.16,
              pitch: 12.00,
              bearing: -88.83
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair9',
            title: 'Staircase 9',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.26106, 34.10514],
              zoom: 16.51,
              pitch: 14.50,
              bearing: -124.62
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair10',
            title: 'Staircase 10',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25729, 34.10610],
              zoom: 17.19,
              pitch: 25.50,
              bearing: -26.22
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair11',
            title: 'Staircase 11',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25394, 34.10322],
              zoom: 16.85,
              pitch: 7.00,
              bearing: -94.10
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair12',
            title: 'Staircase 12',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25486, 34.10351],
              zoom: 17.82,
              pitch: 35.50,
              bearing: 97.10
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair13',
            title: 'Staircase 13',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25636, 34.10214],
              zoom: 17.80,
              pitch: 21.50,
              bearing: -177.97
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair14',
            title: 'Staircase 14',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25346, 34.10221],
              zoom: 19.66,
              pitch: 49.00,
              bearing: -85.97
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair15',
            title: 'Staircase 15',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25411, 34.10220],
              zoom: 18.08,
              pitch: 29.50,
              bearing: -86.77
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair16',
            title: 'Staircase 16',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25262, 34.09892],
              zoom: 16.95,
              pitch: 46.00,
              bearing: -61.17
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair17',
            title: 'Staircase 17',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25660, 34.09615],
              zoom: 18.94,
              pitch: 23.00,
              bearing: -82.79
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair18',
            title: 'Staircase 18',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25615, 34.09521],
              zoom: 16.74,
              pitch: 35.50,
              bearing: -63.63
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair19',
            title: 'Staircase 19',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25954, 34.09563],
              zoom: 16.72,
              pitch: 35.50,
              bearing: -88.43
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair20',
            title: 'Staircase 20',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25830, 34.09565],
              zoom: 17.32,
              pitch: 31.00,
              bearing: 98.01
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'stair21',
            title: 'Staircase 21',
            image: './assets/images/rtsmap.jpg',
            description: '',
            location: {
              center: [-118.25701, 34.09496],
              zoom: 18.38,
              pitch: 19.00,
              bearing: -55.98
            },
            onChapterEnter: [
                {
                    // layer: 'silverlake',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'runtrack',
                //     opacity: 1
                // }
            ]
        },
    ]
};
