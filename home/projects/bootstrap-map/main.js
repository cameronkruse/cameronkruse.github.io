mapboxgl.accessToken = 'pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2w5bjYzdXlyMDNyOTNycDh4YnB1dWV5eiJ9.vhIIq0L5So522RkERq7MNQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/highestroad/clb724lpm000015nusg9a9ara', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});