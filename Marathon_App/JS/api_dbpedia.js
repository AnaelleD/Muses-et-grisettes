femmes_wiki = function(){
	
	var femmesMuse = ["Marie","Maria of Montpellier","Françoise de Cezelli","Jeanne Galzy","Juliette Gréco","Hélène Mandroux",
	"Rose-Eliandre Bellemare","Véronique Vendell"] //liste des femmes deja presentes dans le muse. Pb d'affichage wiki pour 2 dernieres
	
	///// Femmes originaires de Montpellier sur Wikipedia /////
	var url = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query="; 
	var query = [
		"PREFIX owl: <http://www.w3.org/2002/07/owl#>",
		"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>",
		"PREFIX foaf: <http://xmlns.com/foaf/0.1/>",
		"PREFIX : <http://dbpedia.org/resource/>",
		"PREFIX dbpedia2: <http://dbpedia.org/property/>",
		"PREFIX dbpedia: <http://dbpedia.org/>",
		"SELECT ?name ?birth ?description ?siteWiki ?image ?name",
		"WHERE {?person a dbo:Person.",
		"?person dbo:birthPlace :Montpellier.",
		"?person dbo:birthDate ?birth.",
		"?person foaf:name ?name.",
		"?person foaf:isPrimaryTopicOf ?siteWiki.",
		"?person foaf:depiction ?image.",
		"?person rdfs:comment ?description.",
		"?person foaf:gender ?gender.",
		"FILTER (LANG(?description) = 'fr' && regex(?gender, 'female')).}",
		"ORDER BY ?birth"].join("");
	var queryUrl = url+ encodeURIComponent(query)+ "&output=json" ; // Requete SPARQL pour dbpedia
  
	var femmesDejaVu = []; //Femmes deja introduites dans le html
	// Requete Fetch avec l'Url 
	fetch(queryUrl).then(function(response) {
		if (!response.ok) {
			alert("Erreur de la requete");
		}
		else{
			return response.json().then(function(json) {
				liste_femmes_json = json.results;
				//console.log(liste_femmes_json);
				var lesFemmesHtml ="";
				
				for (i = 0; i < Object.keys(liste_femmes_json.bindings).length; i++) {
					if(femmesMuse.indexOf(liste_femmes_json.bindings[i]["name"].value) <= -1){ //Si la femme n'est pas deja dans la liste du musee
						if(femmesDejaVu.indexOf(liste_femmes_json.bindings[i]["name"].value) <= -1){ // Si la femme n'est pas déja mise dans le html
							lesFemmesHtml += '<div class="well wikipedia"><div class="media"><div class="media-left">'+
							'<img src="' +liste_femmes_json.bindings[i]["image"].value + '" width="100"/></div><div class="media-body"><h4 class="media-heading">'+
							'<a href="'+liste_femmes_json.bindings[i]["siteWiki"].value+'">'+liste_femmes_json.bindings[i]["name"].value+'</a></h4>'+
							'<p><b>Date de naissance :</b> <br />'+liste_femmes_json.bindings[i]["birth"].value+'</p>'+
							'<p><b>Biographie : </b><br />'+liste_femmes_json.bindings[i]["description"].value+'</p></div></div></div>';
							femmesDejaVu.push(liste_femmes_json.bindings[i]["name"].value);
						}
					}
				}

				var femmesWikiContainer = document.getElementById('femmesWiki');
				femmesWikiContainer.innerHTML = '<h4>Nous avons retrouvé '+ femmesDejaVu.length+' autres femmes originaires de Montpellier :</h4>'+lesFemmesHtml;
				})
		}
	})
	
	
	
	
	
		///// Femmes qui sont passées par la ville de Montpellier /////
		// On recherche Montpellier dans le "comment" des femmes française
	var url = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query="; 
	var query2 = [
		"PREFIX owl: <http://www.w3.org/2002/07/owl#>",
		"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>",
		"PREFIX foaf: <http://xmlns.com/foaf/0.1/>",
		"PREFIX : <http://dbpedia.org/resource/>",
		"PREFIX dbpedia2: <http://dbpedia.org/property/>",
		"PREFIX dbpedia: <http://dbpedia.org/>",
		"SELECT ?name ?birth ?description ?siteWiki ?image ?name",
		"WHERE {?person a dbo:Person.",
		"?person dbo:nationality:France.",
		"?person dbo:birthDate ?birth.",
		"?person foaf:name ?name.",
		"?person foaf:isPrimaryTopicOf ?siteWiki.",
		"?person foaf:depiction ?image.",
		"?person rdfs:comment ?description.",
		"?person foaf:gender ?gender.",
		"FILTER (LANG(?description) = 'fr' && regex(?gender, 'female') && regex(?description,'Montpellier')).}",
		"ORDER BY ?birth"].join("");
	var queryUrl2 = url+ encodeURIComponent(query2)+ "&output=json" ; // Requete SPARQL pour dbpedia
  
	// Requete Fetch avec l'Url 
	fetch(queryUrl2).then(function(response) {
		if (!response.ok) {
			alert("Erreur de la requete");
		}
		else{
			return response.json().then(function(json) {
				liste_femmes_json = json.results;
				//console.log(liste_femmes_json);
				var lesFemmesHtml2 ="";
				var femmesDejaVu2 = []; //Femmes deja introduites dans le html
				
				for (i = 0; i < Object.keys(liste_femmes_json.bindings).length; i++) {
					if(femmesMuse.indexOf(liste_femmes_json.bindings[i]["name"].value) <= -1){ //Si la femme n'est pas deja dans la liste du musee
						if(femmesDejaVu.indexOf(liste_femmes_json.bindings[i]["name"].value) <= -1){ // Si la femme n'est pas déja mise dans le html
							if(femmesDejaVu2.indexOf(liste_femmes_json.bindings[i]["name"].value) <= -1){ // Si la femme n'est pas déja mise dans le html
								lesFemmesHtml2 += '<div class="well wikipedia"><div class="media"><div class="media-left">'+
								'<img src="' +liste_femmes_json.bindings[i]["image"].value + '" width="100"/></div><div class="media-body"><h4 class="media-heading">'+
								'<a href="'+liste_femmes_json.bindings[i]["siteWiki"].value+'">'+liste_femmes_json.bindings[i]["name"].value+'</a></h4>'+
								'<p><b>Date de naissance :</b> <br />'+liste_femmes_json.bindings[i]["birth"].value+'</p>'+
								'<p><b>Biographie : </b><br />'+liste_femmes_json.bindings[i]["description"].value+'</p></div></div></div>';
								femmesDejaVu2.push(liste_femmes_json.bindings[i]["name"].value);
							}
						}
					}
				}

				var femmesWikiContainer = document.getElementById('femmesWiki2');
				femmesWikiContainer.innerHTML = '<h4>Nous avons retrouvé '+ femmesDejaVu2.length+' femmes qui parlent de Montpellier :</h4>'+lesFemmesHtml2;
				})
		}
	})
}