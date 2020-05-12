var config = {
    style: 'mapbox://styles/highestroad/ck9jfwr6b0rjg1ip36kxvvzb4',
    accessToken:'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2s3aThzNG83MDd0aTNkbXFzYTR2cDFubyJ9.nH9oMLxE5jwM0DuTxbZ2UA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'Run The Stairs',
    // subtitle: 'My quest to run all the stairs',
    // byline: 'Cameron Kruse',
    footer: '<a href="https://www.instagram.com/camkruse/" target="_blank">@camkruse</a> Made with Mapbox storytelling template.',
    chapters: [
        {
            id: 'background',
            title: 'Los Angeles, CA',
            image: './assets/images/rts-20.jpg',
            description: "So I live in Los Angeles, specifically the neighborhood of Silverlake in Los Angeles. It is east of downtown just southwest of Dodger stadium. It's the little pink area towards the top of the city.",
            location: {
              center: [-118.26555, 33.93443],
              zoom: 9.61,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'runtrack',
                    opacity: 0
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
            id: 'mapblock',
            title: 'The Map',
            // image: './path/to/image/source.png',
            description: "To help me on my journey I built a map with Mapbox to find all the stairs and highlight other geographic features that would help me on my way. Stairs on this map are highlighted in yellow. Silverlake the neighborhood are the pink dashes. My path is the blue dashes.",
            location: {
              center: [-118.256938, 34.106153],
              zoom: 17.34,
              pitch: 0.00,
              bearing: -126.8
            },
            onChapterEnter: [
                {
                  layer: 'runtrack',
                  opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'runtrack',
                    opacity: 0
                }
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
            description: 'Wear a mask when people were around. I ran this during the COVID-19 quarantine.',
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
                    layer: 'runtrack',
                    opacity: 1
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
            image: './assets/images/rts.jpg',
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
            image: './assets/images/rts-2.jpg',
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
            image: './assets/images/rts-3.jpg',
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
            image: './assets/images/rts-6.jpg',
            description: 'My first blunder! I missed one of the flights on this staircase.',
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
            image: './assets/images/rts-7.jpg',
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
// NEED PICTURE
            // image: './assets/images/rts-8.jpg',
            description: 'I missed taking a photo of this one. I\'ll have to go back',
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
            image: './assets/images/rts-21.jpg',
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
            image: './assets/images/rts-8.jpg',
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
            image: './assets/images/rts-9.jpg',
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
            image: './assets/images/rts-10.jpg',
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
            image: './assets/images/rts-12.jpg',
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
            image: './assets/images/rts-13.jpg',
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
            image: './assets/images/rts-14.jpg',
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
            image: './assets/images/rts-17.jpg',
            description: 'This was the most beautiful staircase I happened across. What a wonderful surprise to see a staircase full of butterfly artwork.',
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
            image: './assets/images/rts-11.jpg',
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
            id: 'lost',
            title: 'Lost!',
            image: './assets/images/rts-15.jpg',
            description: 'The first time I tried to run the stairs. I got lost around here. To get to the next staircase I needed to cross under a few highways. Somewhere I took a wrong turn that felt right and ended up in the middle of Echo Park. I opted to try again in the near future from the start rather than go back a few miles. Some of these pictures are from the first try, but the GPS track is from the second when I ran the entire route.',
            location: {
              center: [-118.24176, 34.09253],
              zoom: 14.72,
              pitch: 23.50,
              bearing: 173.29
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
            image: './assets/images/rts-22.jpg',
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
            image: './assets/images/rts-23.jpg',
            description: 'Look at that legendary wild cactus!',
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
            image: './assets/images/rts-24.jpg',
            description: 'This was probably the longest staircase, but it is also deceiving as it goes up and then down the other side.',
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
            image: './assets/images/rts-27.jpg',
            description: 'This one felt like it might have been a private staircase and it wasn\'t on my map, but I ran it anyway.',
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
            image: './assets/images/rts-25.jpg',
            description: 'Back on the long one going up the other side. Some beautiful artwork in the yards.',
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
            image: './assets/images/rts-26.jpg',
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
        {
            id: 'stair22',
            title: 'Staircase 22',
            image: './assets/images/rts-28.jpg',
            description: '',
            location: {
              center: [-118.25699, 34.09362],
              zoom: 17.65,
              pitch: 45.00,
              bearing: -59.18
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
            id: 'stair23',
            title: 'Staircase 23',
            image: './assets/images/rts-29.jpg',
            description: '',
            location: {
              center: [-118.26094, 34.09518],
              zoom: 17.00,
              pitch: 48.00,
              bearing: 133.62
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
            id: 'stair24',
            title: 'Staircase 24',
            image: './assets/images/rts-30.jpg',
            description: 'The first staircase I found that had been fenced off.',
            location: {
              center: [-118.26279, 34.09372],
              zoom: 17.00,
              pitch: 48.00,
              bearing: 133.62
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
            id: 'stair25',
            title: 'Staircase 25',
            image: './assets/images/rts-31.jpg',
            description: 'Two in a row! Fortunately, this is the last one I found that was closed.',
            location: {
              center: [-118.26085, 34.08953],
              zoom: 17.00,
              pitch: 24.50,
              bearing: -57.58
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
            id: 'stair26',
            title: 'Staircase 26',
            image: './assets/images/rts-33.jpg',
            description: 'There may have been an extension on this one, but it was  fenced off on private property right next to a driveway.',
            location: {
              center: [-118.26081, 34.08616],
              zoom: 17.77,
              pitch: 24.50,
              bearing: -57.58
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
            id: 'stair27',
            title: 'Staircase 27',
            image: './assets/images/rts-34.jpg',
            description: 'Sunsets while running are always bitter sweet. On one hand it\'s incredible to be outside when it\'s so beautiful and the right temperature. On the other hand, it also get\'s dark right after sunset.',
            location: {
              center: [-118.26879, 34.08782],
              zoom: 17.77,
              pitch: 34.00,
              bearing: 131.61
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
            id: 'stair28',
            title: 'Staircase 28',
            image: './assets/images/rts-35.jpg',
            description: '',
            location: {
              center: [-118.26888, 34.08603],
              zoom: 18.17,
              pitch: 37.00,
              bearing: 86.81
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
            id: 'stair29',
            title: 'Staircase 29',
            // image: './assets/images/rtsmap.jpg',
            description: 'Missed getting a picture of this one.',
            location: {
              center: [-118.26857, 34.08526],
              zoom: 18.17,
              pitch: 38.50,
              bearing: 30.01
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
            id: 'stair30',
            title: 'Staircase 30',
            // image: './assets/images/rtsmap.jpg',
            description: 'Getting to this staircase was a low point mentally. I was about 13 miles in, running low on calories, it was over a mile to get over to this part of Silverlake for one staircase, and I twisted my ankle on a curb on the way. Also forgot to take a  picture of this one.',
            location: {
              center: [-118.27761, 34.07726],
              zoom: 17.20,
              pitch: 31.00,
              bearing: -152.39
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
            id: 'stair31',
            title: 'Staircase 31',
            image: './assets/images/rts-36.jpg',
            description: 'Whoops! Another blunder - it was getting dark and I ventured up a staircase to an apartment complex instead of the actual staircase. I will need to come back for this one.',
            location: {
              center: [-118.27596, 34.08250],
              zoom: 17.23,
              pitch: 0.00,
              bearing: -29.69
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
            id: 'stair32',
            title: 'Staircase 32',
            image: './assets/images/rts-37.jpg',
            description: '',
            location: {
              center: [-118.27519, 34.08307],
              zoom: 17.23,
              pitch: 6.00,
              bearing: -56.89
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
            id: 'stair33',
            title: 'Staircase 33',
            image: './assets/images/rts-38.jpg',
            description: '',
            location: {
              center: [-118.27598, 34.08509],
              zoom: 17.57,
              pitch: 2.50,
              bearing: -114.95
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
            id: 'stair34',
            title: 'Staircase 34',
            image: './assets/images/rts-39.jpg',
            description: 'This staircase was a big reason I set out on this adventure. Every morning when I\'d walk down the block to get coffee, I would see this heart painted on the steps crying at how small my legs are from not running more stairs.',
            location: {
              center: [-118.27489, 34.08644],
              zoom: 17.08,
              pitch: 33.00,
              bearing: 72.58
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
            id: 'stair35',
            title: 'Staircase 35',
            image: './assets/images/rts-41.jpg',
            description: 'Another low point. I got lost on the way here, was about 15 miles in, and running in the dark.',
            location: {
              center: [-118.27324, 34.08523],
              zoom: 16.93,
              pitch: 8.50,
              bearing: 97.91
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
            id: 'stair36',
            title: 'Staircase 36',
            image: './assets/images/rts-42.jpg',
            description: '',
            location: {
              center: [-118.27489, 34.08645],
              zoom: 16.93,
              pitch: 8.50,
              bearing: 73.85
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
            id: 'stair37',
            title: 'Staircase 37',
            image: './assets/images/rts-43.jpg',
            description: '',
            location: {
              center: [-118.28105, 34.09328],
              zoom: 18.38,
              pitch: 30.00,
              bearing: -137.82
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
            id: 'stair38',
            title: 'Staircase 38',
            image: './assets/images/rts-44.jpg',
            description: 'Very dark by this point. Really understimated the hill I had to climb to get here. Apparently these are named after an elderly woman who would climb them every day for years. Really impressive considering how long they are.',
            location: {
              center: [-118.27423, 34.09536],
              zoom: 17.43,
              pitch: 35.50,
              bearing: 87.44
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
            id: 'stair39',
            title: 'Staircase 39',
            image: './assets/images/rts-45.jpg',
            description: 'Last one - I made it!',
            location: {
              center: [-118.27219, 34.09731],
              zoom: 17.35,
              pitch: 55.00,
              bearing: -159.51
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
            id: 'home',
            title: '39 Staircases \nDistance - 16.86mi \nElevation - 4,040ft \nTime - 4:08:42',
            image: './assets/images/rts-46.jpg',
            description: 'Overall, I was absolutely blown away by Silverlake. It\'s an incredible neighborhood with really wild and diverse natural life for being right in the middle of LA. I fared pretty well through the experience, but there was considerablly more climbing than I expected.',
            location: {
              center: [-118.27249, 34.09161],
              zoom: 14.07,
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
            id: 'thanks',
            title: 'Thanks',
            // image: './assets/images/rts-46.jpg',
            description: 'Thanks to Charles Fleming for his book <a href="https://www.amazon.com/dp/B00XIN2YPU" target="_blank">Secret Stairs of LA</a> that got me thinking about this. \nThanks Ricky Gates for his <a href="https://www.youtube.com/watch?v=jy_W5qsjB5U" target="_blank">Every Single Street Project</a> that has inspired me to explore more urban areas through running. \nAnd thanks Beau Miles for his short film <a href="https://youtu.be/rxCghemtjjM" target="_blank">Run The Line</a> which inspired me to make a proper challenge out of the stairs journey.',
            location: {
              center: [-118.27249, 34.09161],
              zoom: 14.07,
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
    ]
};
