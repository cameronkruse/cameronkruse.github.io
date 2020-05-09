var config = {
    style: 'mapbox://styles/highestroad/ck9jfwr6b0rjg1ip36kxvvzb4',
    accessToken:'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2s3aThzNG83MDd0aTNkbXFzYTR2cDFubyJ9.nH9oMLxE5jwM0DuTxbZ2UA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Run The Stairs',
    subtitle: 'My quest to run all the stairs',
    byline: 'Cameron Kruse',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
