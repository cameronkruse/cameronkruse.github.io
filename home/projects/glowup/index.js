mapboxgl.accessToken =
    "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2lzNjlpa3c3MGQ3cDJ6cDFzMXZpZTNmMCJ9.M1X4AOcuj4n3VT01ze0x5Q";
const map = new mapboxgl.Map({
    container: "map",
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/highestroad/clb10z1t9006n16pj74bbyxlk",
    center: [30.2836, -2.093],
    zoom: 10
});
let hoveredStateId = null;
var fillColor = "#efece6";
var shadowOpacity = .2;
map.on("load", () => {
    map.addSource("region-data", {
        type: "geojson",
        data: "https://ck-general-projects.s3.us-west-1.amazonaws.com/rwanda_subregions.geojson",
        'generateId': true
    });
    //   add a map layer
    map.addLayer({
        "id": "rsubshadow1",
        "type": "line",
        "source": "region-data",
        "layout": {},
        "paint": {
            "line-color": "hsla(199, 0%, 46%, 0.2)",
            "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0, 10, 2, 22, 2],
            "line-translate": [2, 2]
        }
    });
    map.addLayer({
        "id": "rsubshadow2",
        "type": "line",
        "source": "region-data",
        "layout": {},
        "paint": {
            "line-color": "hsla(0, 0%, 54%, 0.1)",
            "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0, 7, .1, 10, 3, 22, 3],
            "line-translate": [3, 3]
        }
    });
    map.addLayer({
        "id": "rwanda-subregions",
        "type": "line",
        "source": "region-data",
        "layout": {},
        "paint": {
            "line-color": "hsl(50, 0%, 100%)",
            "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0, 10, 1, 22, 1]
        }
    });
    map.addLayer({
        id: "region-fill",
        type: "fill",
        source: "region-data",
        layout: {},
        paint: {
            "fill-outline-color": "hsla(0, 0%, 0%, 0)",
            "fill-color": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                "#efece6",
                "white"
            ],
            //what's happening below is the boolean value true is what's listed first, the line below is what boolean false is.
            "fill-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                1,
                0
            ]
        }
    });
    console.log(map.getLayer("region-fill").source)
    shadowButton("country-mask1", 6);
});
