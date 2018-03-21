/* initialisation de la fonction initmap */
function initmap() {
	document.getElementById('mapFemme').innerHTML = "<div id='map' style='width:99%; height:450px;'></div>";
	map = new L.Map('map');
	var osmUrl='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
	var osmAttrib='Map data de OpenStreetMap';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 20, attribution: osmAttrib});           
	// on centre sur Montpellier : 
	map.setView(new L.LatLng(43.612909, 3.869406),10);
	map.addLayer(osm);
}

/* recuperer valeurs checkbox */
function actumap(){
	/* Import des données */
	d3.csv("Data/bd_femmes_mtp.csv", function(error, data){	
	
		$("input[name='periode']").change(function(){
			var periode = []; // initier liste periodes choisies
			$.each($("input[name='periode']:checked"), function(){ 
				periode.push($(this).val());
			}); 

			/*Reset the map */
			initmap();

			/* On boucle sur les données pour y placer les points */
			for (i = 0; i < data.length; i++) {
				if (periode.indexOf(data[i]["periode"]) > -1){ // Si correspond a periode choisie
					if (data[i]["latitude"].length > 0) { //Si adresse est renseignee
						var latitude = data[i]["latitude"];
						var longitude = data[i]["longitude"];
						var iconF = L.icon({
							iconUrl: 'img/pins/'+data[i]["index"]+'.png',
							iconSize: [60, 100], // size of the icon
							iconAnchor: [30,100], // point of the icon which will correspond to marker's location
							popupAnchor: [30, -100] // point from which the popup should open relative to the iconAnchor
						});
						var popup = '<b>'+data[i]["nom"]+'</b>'+'<br>'+'#'+data[i]["motCles"];
						popup = popup.replace(/, /g, " #"); // rajouter des #
						L.marker([latitude, longitude], {icon: iconF}).addTo(map).bindPopup(popup); // Rajouter les pins
					}
				}
			}		 
		})
	
	});
};