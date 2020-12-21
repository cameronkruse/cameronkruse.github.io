var s_inat_url = 'https://api.inaturalist.org/v1/'

// Build query string for iNat observation layers
function fbuildqs(ary) {
   var qs = '';
   for (i=0;i<ary.length;i++) {
      qs += (i==0 ? '?' : '&')+ary[i];
   };
   return qs;
};
var inat_query_string = fbuildqs([
//   'color=magenta', //set the color of the pins, circles, and heatmap
//   'id=26357908,26454874', //observation id; separate values with comma
   'user_id=pisum', //separate values with comma
//   'place_id=1', //separate values with comma
//   'project_id=2', //separate values with comma
//   'taxon_id=3,630955', //separate values with comma
//   'd1=2019/04/01', // date range from
//   'd2=2019/04/30', // date range to
//   'year=2019', //separate values with comma
//   'month=1,2', //separate values with comma
//   'day=1', // separate values with comma
//   'verifiable=true',
//   'quality_grade=research', //research,needs_id,casual
]);

// Create iNat observation image tileset layers
var l_inat_pts = L.tileLayer(s_inat_url+'points/{z}/{x}/{y}.png'+inat_query_string,{maxZoom:20, attribution:'<a href="'+s_inat_url+'docs/#!/Observation_Tiles/get_points_zoom_x_y_png">iNaturalist observation data</a>'});
var l_inat_cheat = L.tileLayer(s_inat_url+'colored_heatmap/{z}/{x}/{y}.png'+inat_query_string,{maxZoom:20, attribution:'<a href="'+s_inat_url+'docs/#!/Observation_Tiles/get_colored_heatmap_zoom_x_y_png">iNaturalist observation data</a>'});
var l_inat_heat = L.tileLayer(s_inat_url+'heatmap/{z}/{x}/{y}.png'+inat_query_string,{maxZoom:20, attribution:'<a href="'+s_inat_url+'docs/#!/Observation_Tiles/get_heatmap_zoom_x_y_png">iNaturalist observation data</a>'});

// Create iNaturalist UTFGrids and pair each with an observation tileset from above (skip heatmap, since there aren't distinct points in that)
function fpopup(obs) {
   var s = (obs.photos.length==0) ? '[No Photo]' : '<img src="'+obs.photos[0].url.replace('square','small')+'" />';
   s += (obs.photos.length>1) ? ' ['+obs.photos.length+']' : '';
   s += '<br />observation #: <a href="'+obs.uri+'">'+obs.id+'</a> (grade: '+obs.quality_grade+')';
   s += '<br />taxon: ' + ((obs.taxon===null) ? '[Unknown]' : (obs.taxon.preferred_common_name+' ('+obs.taxon.name+')'));
   s += '<br />observer: '+obs.user.login
      + '<br />location: '+obs.place_guess
      + '<br />coordinates: '+Math.round(obs.geojson.coordinates[1]*1000000)/1000000+', '+Math.round(obs.geojson.coordinates[0]*1000000)/1000000;
   s += (obs.positional_accuracy===null) ? '' : ' ('+Math.round(obs.positional_accuracy*10)/10+'m)';
   s += '<br />observed: '+((obs.time_observed_at===null) ? ((obs.observed_on===null) ? '[Unknown]': obs.observed_on) : obs.time_observed_at.replace('T',' '));
   s += '<br />created: '+((obs.created_at===null) ? obs.created_at_details.date : obs.created_at.replace('T',' '));
   s += '<br />last updated: '+obs.updated_at.replace('T',' ');
   if (obs.description===null) {}
   else if (obs.description.length < 200) {s += '<br />'+obs.description }
   else {s += '<br />'+(obs.description.substring(0,200)+'... (more)')};
   L.popup().setLatLng([obs.geojson.coordinates[1],obs.geojson.coordinates[0]])
      .setContent(s).openOn(mymap);
};

var u_inat_pts = L.utfGrid(s_inat_url+'points/{z}/{x}/{y}.grid.json'+inat_query_string,{maxZoom:20});//no attribution here because it won't ever exist on its own
u_inat_pts.on("click", function(e) { // "mouseover" and "mouseout" events not used here
   if (e.data) {
      corslite(s_inat_url+'observations/'+e.data.id, function(err, response) {
         if (err) {
            self.fire('error', {error: err});
            return;
         };
         var obsdata = JSON.parse(response.responseText);
         fpopup(obsdata.results[0]);
       }, true);
   };
});
var g_inat_pts = L.layerGroup([l_inat_pts, u_inat_pts]); // pair the UTFGrid with its map tile set.

var u_inat_cheat = L.utfGrid(s_inat_url+'colored_heatmap/{z}/{x}/{y}.grid.json'+inat_query_string,{maxZoom:20});//no attribution here because it won't ever exist on its own
u_inat_cheat.on("click", function(e) { // "mouseover" and "mouseout" events not used here
   if (e.data) {
      corslite(s_inat_url+'observations/'+e.data.id, function(err, response) {
         if (err) {
            self.fire('error', {error: err});
            return;
         };
         var obsdata = JSON.parse(response.responseText);
         fpopup(obsdata.results[0]);
       }, true);
   };
});
var g_inat_cheat = L.layerGroup([l_inat_cheat, u_inat_cheat]);