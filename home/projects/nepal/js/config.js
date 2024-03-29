// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 1;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)

var config = {
    style: 'mapbox://styles/highestroad/ck7cqndn70h3m1ikx53ikytqs',
    accessToken: 'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'When Glaciers Go',
    subtitle: 'Climate refugees high in the Himalayas negotiate with our changing planet',
    byline: 'By Cameron Kruse, Corey Robinson, and Tashi Bista',
    footer: 'Source: A National Geographic Project. Thanks to @Jonniwalker and scrollydrive (adding links later)',
    sourcetest: '../videos/applestrimmed.mov',
    chapters: [
        {
            id: 'chapter1',
            title: 'Mustang',
            image: './images/ckrusenepal-109.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            photoBlock: false,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            textBlock: false,
            stickySource: '',
            location: {
                center: [83.99787, 29.06679],
                zoom: 12.57,
                pitch: 0,
                bearing: 60
            },
            onChapterEnter: [
                {
                    // layer: 'tracks1',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'chambale-dhey-road2',
                    opacity: 0
                }
            ]
        },
        {
            id: 'drive-chapter2',
            title: 'Dhey',
            image: './images/ckrusenepal-95.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            photoBlock: false,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            textBlock: false,
            stickySource: '',
            location: {
                center: [84.014188, 29.041815],
                zoom: 17.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    // layer: 'tracks1',
                    // opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'tracks1',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'drive-chapter25',
            title: 'Line should appear beneath showsticky is on',
            image: './images/ckrusenepal-95.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            photoBlock: false,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            textBlock: false,
            stickySource: '../images/ckrusenepal-68.jpg',
            location: {
                center: [84.014188, 29.041815],
                zoom: 17.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    // layer: 'tracks1',
                    // opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'tracks1',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter3',
            title: 'Chambaleh',
            image: './images/ckrusenepal-37.jpg',
            description: 'Copy these sections to add to your story.',
            photoBlock: true,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            textBlock: false,
            stickySource: '',
            location: {
                center: [83.955668, 29.066805],
                zoom: 18.25,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
              //     layer: 'chambale-dhey-road2',
              //     opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter4',
            title: 'New Road from Chambaleh to Dhey',
            image: './images/ckrusenepal-62.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            photoBlock: true,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            textBlock: false,
            stickySource: '',
            location: {
                center: [83.99449, 29.04885],
                zoom: 12.94,
                pitch: 0,
                bearing: 9
            },
            onChapterEnter: [
                {
                    // layer: 'tracks1',
                    // opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'tracks1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sticky1',
            title: 'Water fed Mill',
            image: './images/ckrusenepal-62.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            photoBlock: false,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            textBlock: false,
            stickySource: '',
            location: {
                center: [83.99449, 29.04885],
                zoom: 12.94,
                pitch: 0,
                bearing: 9
            },
            onChapterEnter: [
                {
                    // layer: 'tracks1',
                    // opacity: 1
                }
            ],
            onChapterExit: [
                {
                    // layer: 'tracks1',
                    // opacity: 0
                }
            ]
        },
        {
            id: 'chapter5',
            title: 'Glaciers',
            image: './images/ckrusenepal-105.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            photoBlock: false,
            videoBlock: false,
            scrollVideoBlock: false,
            sphericalVideo: false,
            stickySource: '',
            location: {
                center: [84.09096, 28.91339],
                zoom: 13.03,
                pitch: 0,
                bearing: 60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
