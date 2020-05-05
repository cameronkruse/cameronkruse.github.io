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
var followZoomLevel = 12;
var followBearing = 0;
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
    alignment: 'center',
    title: 'When Glaciers Go',
    subtitle: 'Climate refugees high in the Himalayas negotiate with our changing planet',
    byline: 'By Cameron Kruse',
    footer: 'Source: A National Geographic Project. Thanks to @Jonniwalker, scrollydrive, MapBox, Delair, Hammer, Sierra Designs, Western Digital and more (adding links later)',
    chapters: [
        {
            id: 'slide-0',
            photoblock: "url('./images/ckrusenepal-82.jpg')",
            blankblock: false,
            title: 'Chambale, Nepal',
            // image: './images/ckrusenepal-28.jpg',
            description: 'The sun hasn’t even risen behind the steep sandy cliffs of Chambale, but the water splashing over his calloused hands shakes Sangbo from the lingering fog of sleep bringing him into the present moment with a cold jolt. He pushes a medium sized boulder in front of the small stream and redirects the water vaguely towards a neat row of chest high apple trees rising from the river rocks strewn through the landscape. He grabs a shovel and chases the water as it snakes its way towards the first tree. Digging out a channel for the water to meet the tree, his mind wanders: “how long have I been chasing water? Who are we, out of all the generations, to lead this chase?” The divot encompassing the small tree begins to fill, creating a dirty puddle of water. Sangbo moves on to the next tree.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            photoblock: "url('./images/ckrusenepal-81.jpg')",
            blankblock: false,
            // title: 'Second Title',
            // image: './images/ckrusenepal-28.jpg',
            description: 'Around him he sees more than 1,000 trees stretch across a dried river bed each holding their own against the unforgiving Himalayan climate. The trees seem to wear the struggle of high altitude existence; they are small, covered in dust, many bent from the ruthless winds. As sad as they look, they are the only trees for as far as the eye can see - a symbol of resistance against the poor odds that nature seemed to be pushing his way. Digging another channel, his mind wanders again. This time back to the old village of Dhey ten miles away over the mountain rising above him.  “It wasn’t until eight years ago that the water seemed to start disappearing. There was always enough to grow food and run the mill for as long as I can remember and as long as my grandparents remember. What changed?” The water splashes into the tree in front of him and he moves on, channeling the water as he goes. He falls into a methodical rhythm,  moving tree to tree, chasing the water he had come here to find.',
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
            photoblock: "url('./images/ckrusenepal-94.jpg')",
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
            photoblock: "url('./images/ckrusenepal-61.jpg')",
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
