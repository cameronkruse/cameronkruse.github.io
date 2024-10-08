console.log('console log is working');

// Map stuff
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

// ^End Map stuff^

var story = document.getElementById('story');
// don't think I need this
var photo = document.getElementById('photo');
// ^^^
var features = document.createElement('div');
var thephotoreal = document.createElement('div');
var theblankblockreal = document.createElement('div');
thephotoreal.setAttribute('id', 'photo');
theblankblockreal.setAttribute('id', 'blankblock');

features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

//TODO: could add an if statement here: 
//if (config.testfield) {
//    features.setAttribute('')
//}

// storytelling header begin
var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}
// storytelling header end




config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');



    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);

    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    features.appendChild(container);
});

story.appendChild(features);
photo.appendChild(thephotoreal);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,

    // center: config.chapters[0].location.center,
    // zoom: config.chapters[0].location.zoom,
    // bearing: config.chapters[0].location.bearing,
    // pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

function handleStepProgress(response) {
    let stepProgress;

    if (response.element.id.slice(0, 5) === 'drive') {
        let driveSlideNum = parseInt(response.element.id.slice(-1));
        if (driveSlideNum === 0) {
            map.setLayoutProperty('animatedLine', 'visibility', 'visible');
            stepProgress = Math.round(response.progress * driveSmoothness);
        } else {
            stepProgress = Math.round(response.progress * driveSmoothness + driveSmoothness * driveSlideNum);
        }
        changeCenter(stepProgress);
    }
}
// I don't think I'll edit anything past here. this is basically loading the mapbox map and overlaying all the scroll line stuff on it.

map.on("load", function () {

    let w = window.innerWidth;
    let initBounds = routeData.features[0].geometry.coordinates;

    if (followPoint === false) {
        var bounds = initBounds.reduce(function (bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(initBounds[0], initBounds[0]));

        if (w >= 500) {
            map.fitBounds(bounds, {
                padding: {
                    top: 150,
                    bottom: 150,
                    right: -100,
                    left: 200
                },
                duration: 0
            });
        } else {
            map.fitBounds(bounds, {
                padding: 20,
                duration: 0
            });
        }
    } else {
        map.setZoom(followZoomLevel);
        map.setBearing(followBearing);
        map.setPitch(followPitch);
    }

    map.addSource('lineSource', {
        "type": "geojson",
        "data": geojsonPoint
    });

    map.addSource('pointSource', {
        "type": "geojson",
        "data": geojsonPoint
    });

    map.addLayer({
        "id": "animatedLine",
        "type": "line",
        "source": "lineSource",
        'paint': {
            'line-opacity': 1,
            'line-color': '#333',
            'line-width': 3.5
        },
        'layout': {
            'visibility': 'none'
        }
    });

    map.addLayer({
        "id": "animatedPoint",
        "type": "circle",
        "source": "pointSource",
        'paint': {
            'circle-radius': 5,
            'circle-opacity': 1,
            'circle-color': '#333'
        },
        'layout': {
            // 'visibility': 'none'
        }
    });

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            // should make photoblock not opaque
            var xvariable = chapter.photoblock;
            if (chapter.photoblock) {
                console.log('photoblock is true');
                console.log(chapter.photoblock);
                // var image = new Image();
                // image.src = chapter.photoblock;
                // console.log(image.src)
                // thephotoreal.appendChild(image);
                document.getElementById("photo").style.display = "block";
                document.getElementById("photo").style["background-image"] = chapter.photoblock;
                const element = document.querySelector('.photoblock');
                const background = element.style.photo;
                console.log(background);

                // could I just change the background picture source?
            } else {
                console.log('photoblock is false');
                document.getElementById("photo").style.display = "none";
            }

            // Should make blankblock not opaque
            var blankblockchapter = document.createElement('div');
            if (chapter.blankblock) {
                console.log('blankblock is true');
                theblankblockreal.appendChild(blankblockchapter);
                document.getElementById("blankblock").style["display"] = "block";
            } else {
                console.log('blankblock is false')
                document.getElementById("blankblock").style.display = "none";
            }

            // map.flyTo(chapter.location);

            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        })
        .onStepProgress(handleStepProgress);

    createLine();
});
map.on('load', function () {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
    });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });
});

// setup resize event
window.addEventListener('resize', scroller.resize);

$(document).ready(function () {
    $.ajax({
        // !!!!THIS IS THE LINE TO CHANGE!!!!
        // url:"./data/highwaydrive.geojson",
        url: "./data/road3.geojson",
        dataType: "json",
        success: function (data) {
            console.log('data', data.features[0]);
            routeData = data;
        },
        error: function () {
            console.log('error loading data');
        }
    });
});