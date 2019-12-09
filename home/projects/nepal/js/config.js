var config = {
    style: 'mapbox://styles/highestroad/ck3ozjhyd0myt1cqz0imxcppq',
    accessToken: 'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Where To Run When The Glaciers Run Dry',
    subtitle: 'Climate refugees high in the Himalayas negotiate with our changing planet',
    byline: 'By Cameron Kruse, Tashi Bista, and Corey Robinson',
    footer: 'Source: A National Geographic Project',
    chapters: [
        {
            id: 'chapter1',
            title: 'Mustang',
            image: './images/ckrusenepal-109.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [83.99787, 29.06679],
                zoom: 12.57,
                pitch: 98.20,
                bearing: 60
            },
            onChapterEnter: [
                {
                    layer: 'tracks1',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            title: 'Dhey',
            image: './images/ckrusenepal-95.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [84.014188, 29.041815],
                zoom: 17.6,
                pitch: 0,
                bearing: 0
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
        },
        {
            id: 'chapter3',
            title: 'Chambaleh',
            image: './images/ckrusenepal-1.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [83.955668, 29.066805],
                zoom: 18.25,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter4',
            title: 'New Road from Chambaleh to Dhey',
            image: './images/ckrusenepal-62.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [83.99449, 29.04885],
                zoom: 12.94,
                pitch: -162,
                bearing: 9
            },
            onChapterEnter: [
                {
                    layer: 'tracks1',
                    opacity: 1
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
            id: 'chapter5',
            title: 'Glaciers',
            image: './images/ckrusenepal-105.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [84.09096, 28.91339],
                zoom: 13.03,
                pitch: 112.8,
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
