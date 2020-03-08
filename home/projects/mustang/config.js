// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 4;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 15;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/highestroad/ck7cqndn70h3m1ikx53ikytqs',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2s3aGUwZ2JtMDlmbzNrcGEycnZ1Zm1jeSJ9.mdEVq4ccttmyLD9yPj39Uw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'When Glaciers Go',
    subtitle: 'Climate refugees high in the Himalayas negotiate with our changing planet',
    byline: 'By Cameron Kruse',
    footer: 'Source: A National Geographic Project. Thanks to @Jonniwalker, scrollydrive, MapBox, Delair, Hammer, Sierra Designs, Western Digital and more (adding links later)',
    chapters: [
        {
            id: 'slide-0',
            photoblock: false,
            blankblock: false,
            title: 'Display Title',
            image: './images/ckrusenepal-92.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            photoblock: false,
            blankblock: false,
            title: 'Second Title',
            image: './images/ckrusenepal-28.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            photoblock: false,
            blankblock: false,
            title: '3 Title',
            image: './images/ckrusenepal-10.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            photoblock: './images/ckrusenepal-94.jpg',
            blankblock: false,
            title: 'photoblock title 1',
            image: './images/ckrusenepal-101.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            photoblock: './images/ckrusenepal-94.jpg',
            blankblock: false,
            title: 'photoblock title 2',
            image: './images/ckrusenepal-14.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            photoblock: false,
            blankblock: false,
            title: '4 Title',
            image: './images/ckrusenepal-44.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'slide-4',
            photoblock: false,
            blankblock: true,
            title: 'blankblock 1',
            image: './images/ckrusenepal-112.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            photoblock: false,
            blankblock: true,
            title: 'blankblock 2',
            image: './images/ckrusenepal-32.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            photoblock: false,
            blankblock: false,
            title: '7 Title',
            image: './images/ckrusenepal-28.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-7',
            photoblock: false,
            blankblock: false,
            title: '8 Title',
            image: './images/ckrusenepal-87.jpg',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
