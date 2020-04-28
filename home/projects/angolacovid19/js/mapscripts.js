mapboxgl.accessToken = 'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2s4OWQyN21jMDVyZjNubnJrYzF0bGhocSJ9.R-mxvSZ1xmpN6dF1EuGtPQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/highestroad/ck89c9vny00841jpiit15sekn',
zoom: 14.35,
center: [13.25692,-8.83479]
});

map.on('load', function() {
map.addSource('CovidStores_v1.0', {
type: 'vector',
url: 'mapbox://highestroad.ck8aedxc10kdb2so09wnhau2c-2jb6i'
});
map.addLayer({
'id': 'Supermarkets',
'type': 'circle',
'source': 'CovidStores_v1.0',
'layout': {
'visibility': 'visible'
},
'paint': {
'circle-radius': 8,
'circle-color': 'rgba(55,148,179,1)'
},
'source-layer': 'museum-cusco'
});

map.addSource('contours', {
type: 'vector',
url: 'mapbox://mapbox.mapbox-terrain-v2'
});
map.addLayer({
'id': 'Contours',
'type': 'line',
'source': 'contours',
'source-layer': 'contour',
'layout': {
'visibility': 'visible',
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#877b59',
'line-width': 1
}
});
});

// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
})
);

var toggleableLayerIds = ['Contours', 'Supermarkets'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
var id = toggleableLayerIds[i];

var link = document.createElement('a');
link.href = '#';
link.className = 'active';
link.textContent = id;

link.onclick = function(e) {
var clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();

var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
}
};

var layers = document.getElementById('menu');
layers.appendChild(link);
}
