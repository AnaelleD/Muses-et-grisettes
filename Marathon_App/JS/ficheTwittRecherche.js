// Recherche sur une femme
function actuFrise(){
	$("#search_button").click(function() {
		var femme_choisie = $( "#search_bar" ).val();
		
		//Prendre l'ID de la femme
		d3.csv("Data/bd_femmes_mtp.csv", function(error,data) {
			for (i = 0; i < data.length; i++) {
				if (data[i]["nom"] === femme_choisie){
					
					var femme_choisie_id = 'f'+ data[i]["index"];
				};
			}
			
			var laCarte = document.getElementById(femme_choisie_id);
			laCarte.className = "single-card active";

			var periodeOccult = document.getElementsByClassName("periods-container");
			periodeOccult[0].style.opacity=0;
		})
	})
}