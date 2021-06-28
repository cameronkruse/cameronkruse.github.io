// my token
mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2txN2xocGsxMDNzazMxb2NrMHM3aGsydSJ9.2nFuGnkgMvZPvYupaX3yTA";

//Add Map
const map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/highestroad/ckq7lmc8s6wpl17my2cep4smd", // style URL
    center: [-118.2743, 34.0900], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

//Locate user
var geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

//store location coordinates as global variable
geolocate.on('geolocate', function (e) {
    var lon = e.coords.longitude;
    var lat = e.coords.latitude;
    userPosition = [lon, lat];
});

//Add in geocoder
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});
//Store searched location as global variable and map route
geocoder.on('result', function (e) {
    searchCoords = e.result.center;
    getTrafficRoute(userPosition, searchCoords);
    getCycleRoute(userPosition, searchCoords);
    getDriveRoute(userPosition, searchCoords);
})

// Add controls to the map.
map.addControl(geocoder);
map.addControl(geolocate);

// initialize the map canvas to interact with later
var canvas = map.getCanvasContainer();

//on load activity
map.on('load', function () {
    geolocate.trigger();
    map.on('click', function (e) {
        var coordsObj = e.lngLat;
        canvas.style.cursor = '';
        var coords = Object.keys(coordsObj).map(function (key) {
            return coordsObj[key];
        });
        var end = {
            type: 'FeatureCollection',
            features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: coords
                    }
                    }
                ]
        };
        if (map.getLayer('end')) {
            map.getSource('end').setData(end);
        } else {
            map.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: coords
                            }
          }]
                    }
                },
                paint: {
                    'circle-radius': 10,
                    'circle-color': '#f30'
                }
            });
        }
        getTrafficRoute(userPosition, coords);
        getCycleRoute(userPosition, coords);
        getDriveRoute(userPosition, coords);
    });
});

// create a function to make a driving directions request
function getDriveRoute(begin, end) {
    // make a directions request using cycling profile
    var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + begin[0] + ',' + begin[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function () {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var route = data.geometry.coordinates;
        var geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: route
            }
        };
        // if the route already exists on the map, reset it using setData
        if (map.getSource('route')) {
            map.getSource('route').setData(geojson);
        } else { // otherwise, make a new request
            map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: geojson
                        }
                    }
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
    };
    req.send();
    new mapboxgl.Popup()
        .setLngLat([-118.2743, 34.0900])
        .setHTML('Blue Shows the best driving path. Pink shows the fastest route if there is trafic on the standard driving path. Green is a cycling route')
        .addTo(map);
}

//create a function to make a traffic directions request
function getTrafficRoute(begin, end) {
    // make a directions request using cycling profile
    var url = 'https://api.mapbox.com/directions/v5/mapbox/driving-traffic/' + begin[0] + ',' + begin[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function () {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var trafficroute = data.geometry.coordinates;
        var geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: trafficroute
            }
        };
        // if the route already exists on the map, reset it using setData
        if (map.getSource('trafficroute')) {
            map.getSource('trafficroute').setData(geojson);
        } else { // otherwise, make a new request
            map.addLayer({
                id: 'trafficroute',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: geojson
                        }
                    }
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#FFC0CB',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
    };
    req.send();
}

//Return Cycling Route function
function getCycleRoute(begin, end) {
    // make a directions request using cycling profile
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + begin[0] + ',' + begin[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function () {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var cycleroute = data.geometry.coordinates;
        var geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: cycleroute
            }
        };
        // if the route already exists on the map, reset it using setData
        if (map.getSource('cycleroute')) {
            map.getSource('cycleroute').setData(geojson);
        } else { // otherwise, make a new request
            map.addLayer({
                id: 'cycleroute',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: geojson
                        }
                    }
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#228B22',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
    };
    req.send();
}