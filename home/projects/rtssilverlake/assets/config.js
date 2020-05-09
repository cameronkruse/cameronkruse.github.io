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
            id: 'rule1',
            title: 'Rule 1',
            // image: './path/to/image/source.png',
            description: 'Climb every staircase in Silverlake. Depending on how you count them there are about 40 staircases in Silverlake',
            location: {
              center: [-118.26592, 34.09497],
              zoom: 13.15,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'silverlake',
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
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-118.26592, 34.09497],
              zoom: 13.15,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'runtrack',
                opacity: 0
              }
            ],
            onChapterExit: []
        }
    ]
};
