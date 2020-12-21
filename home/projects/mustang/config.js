// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 1;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides * driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 12;
var followBearing = 0;
var followPitch = 80.00;

//TODO: Add Drop Shadows to storytelling boxes - https://cdn-images.kontinentalist.com/static-html/food-security-mekong-river-hydropower-dam-climate-change/index.html

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
    // title: 'When Glaciers Go',
    // subtitle: 'Climate refugees high in the Himalayas negotiate with our changing planet',
    // byline: 'By Cameron Kruse',
    footer: 'Source: A National Geographic Project. Thanks to @Jonniwalker, scrollydrive, MapBox, Delair, Hammer, Sierra Designs, Western Digital and more (adding links later)',
    chapters: [
        {
            id: 'ch1',
            photoblock: "url('./images/ckrusenepal-82.jpg')",
            blankblock: false,
            title: 'Chambale, Nepal',
            // image: './images/ckrusenepal-28.jpg',
            description: 'The sun hasn’t even risen behind the steep sandy cliffs of Chambale, but the water splashing over his calloused hands shakes Sangbo from the lingering fog of sleep bringing him into the present moment with a cold jolt. He pushes a medium sized boulder in front of the small stream and redirects the water vaguely towards a neat row of chest high apple trees rising from the river rocks strewn through the landscape.',
            location: {
                center: [-118.26555, 33.93443],
                zoom: 9.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch2',
            photoblock: "url('./images/ckrusenepal-82.jpg')",
            blankblock: false,
            // title: 'Chambale, Nepal',
            // image: './images/ckrusenepal-28.jpg',
            description: ' He grabs a shovel and chases the water as it snakes its way towards the first tree. Digging out a channel for the water to meet the tree, his mind wanders: “how long have I been chasing water? Who are we, out of all the generations, to lead this chase?” The divot encompassing the small tree begins to fill, creating a dirty puddle of water. Sangbo moves on to the next tree.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch3',
            photoblock: "url('./images/ckrusenepal-2.jpg')",
            blankblock: false,
            // title: 'Second Title',
            // image: './images/ckrusenepal-28.jpg',
            description: 'Around him he sees more than 1,000 trees stretch across a dried river bed each holding their own against the unforgiving Himalayan climate. The trees seem to wear the struggle of high altitude existence; they are small, covered in dust, many bent from the ruthless winds. As sad as they look, they are the only trees for as far as the eye can see - a symbol of resistance against the poor odds that nature seemed to be pushing his way. Digging another channel, his mind wanders again. This time back to the old village of Dhey ten miles away over the mountain rising above him.  “It wasn’t until eight years ago that the water seemed to start disappearing. There was always enough to grow food and run the mill for as long as I can remember and as long as my grandparents remember. What changed?” The water splashes into the tree in front of him and he moves on, channeling the water as he goes. He falls into a methodical rhythm, moving tree to tree, chasing the water he had come here to find.',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            photoblock: false,
            blankblock: false,
            title: 'Nepal',
            image: '',
            description: 'Nestled between India and Chinese controlled Tibet, you find Nepal. If you were to be looking at a world map flat on a table, you may struggle to find it; turn that map into a mountain topography and all you see is Nepal. Eight of the world\'s ten tallest mountains call Nepal home. The Great Himalayan Range tears across Nepal’s northern border forming a natural wall between Nepal and the roof of the world - Chinese controlled Tibet.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            photoblock: false,
            blankblock: false,
            title: 'Glaciers',
            image: '',
            description: 'With these mountains comes, Ice and with Ice - water. The Himalayas are known as the water tower of the world. The ice in Himalayan glaciers account for xxxx of the world’s fresh water supply and xxxx of this water is in Nepal itself. As climate change has changed weather patterns, droughts have become more common and more severe which means that these water sources are more needed than ever. Countries like India and Pakistan have even gone to war over who will control glaciers. Although glacial water sources are integral to the health and wellbeing of millions of people, they are melting faster than ever. Current estimates conclude that over a third of Himalayan glaciers will be melted before 2100. Many glaciers in the Himalayas are fractions of the size they were even 10 years ago.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch6',
            photoblock: "",
            blankblock: false,
            title: '',
            image: '',
            description: 'It is clear that glacial melt will soon impact billions of people around the world downstream, but those that live within the Himalaya are already seeing dramatic water shortages that have proved to be a forcing function driving broad cultural changes. One such community, the people from the village of Dhey is where you find Sangbo and his wife Lhakpa.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch7',
            photoblock: "url('./images/ckrusenepal-79.jpg')",
            blankblock: false,
            title: 'Chambale, Apple Orchards',
            image: '',
            description: 'Half a mile away Lhakpa cleanly pulls an apple from the tree in front of her and gently drops it into the basket lying on the ground. She can vaguely see her husband Sangbo in the distance irrigating. Snap, another apple off the tree into the basket. The harvest is not as good this year as it was last year. Even if it was, there is no news whether the truck will be able to make it to their village this year. With all these thoughts weighing on her, she shoulders her basket and stumbles through the expanse of river rock towards her home in Chambale.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'ch8',
            photoblock: "url('./images/ckrusenepal-73.jpg')",
            blankblock: false,
            title: '',
            image: '',
            description: 'Arriving home she drops her basket in the kitchen looking around at the lightly furnished interior. “Will this ever feel like home?” she thinks. Outside she hears a loud clattering, the sound of the community tractor negotiating with the large river stones moving through the rough landscape trouncing any of those unlucky enough to be aboard. As the grumbling machine grows nearer, the engine cuts and she hears a _____ year old boy’s voice: “ tashi delay! - Thank you goodbye.” She joyfully moves towards the door just in time to see a ______ year old half jump half bounce out of the tractor’s trailer. “Welcome home Tenzing my son!”',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch9',
            photoblock: false,
            blankblock: true,
            title: 'Himalayan Glacial Melt',
            image: '',
            description: 'As glacial melt has increased, scientists have begun to measure the rate of melting. According to one study the melting of the Himalayan glaciers has more than doubled in the past 20 years when compared to the previous 20 years. On average a typical glacier loses more than a vertical foot and half of ice each year.',
            location: {
                center: [82.63850, 28.83608],
                zoom: 4.89,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch10',
            photoblock: false,
            blankblock: false,
            title: 'Impact of Glacial Melt',
            image: '',
            description: 'As this ice melts the water trickles downstream joining into the streams that supply water to billions of people. For most of those downstream, glacial melt has not necessarily caused a noticeable difference in water supply. More water melting off of glaciers typically just means more water going into oceans and perhaps slight increases in water in seasons that may be dry. However, as you move upstream, this story begins to change.',
            location: {
                center: [82.63850, 28.83608],
                zoom: 4.89,
                pitch: 80.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch11',
            photoblock: false,
            blankblock: false,
            title: 'Impact on High Altitude Communities',
            image: '',
            description: 'Those that live in close proximity to glaciers, the people of Dhey, and other communities in the Himalaya are often dependent on groundwater; springs fed by consistent glacial melt patterns. Historically villages have formed around such sources rather than the large river tributaries as ground water is clean, the village is not at risk from seasonal flooding, and the soil is typically much better for farming.',
            location: {
                center: [82.63850, 28.83608],
                zoom: 4.89,
                pitch: 80.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch11',
            photoblock: false,
            blankblock: false,
            title: 'Impact on High Altitude Communities',
            image: '',
            description: 'Unfortunately, as glacial melt patterns have changed, the groundwater distribution has also changed. In many areas groundwater fed springs are no longer consistently producing the water needed to support the agricultural practices of a village. The closer a village is to it’s glacial water source, the more at risk it is of losing its water source. As glacial melt patterns have quickly changed, many villages have no other choice but to pack up and leave; leaving behind their homes and ancient way of life like ghosts littered about the himalayan tundra.',
            location: {
                center: [82.63850, 28.83608],
                zoom: 4.89,
                pitch: 80.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};