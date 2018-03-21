function network(){
	
	//Edges source et target font reference aux index des noeuds.
	var linksTotal = [
		{"source":"1","target":"100","value":8,"color":"#F63631", "periode":"1"},
		{"source":"2","target":"101","value":8,"color":"#F63631", "periode":"1"},
		{"source":"3","target":"102","value":8,"color":"#FF8C26", "periode":"2"},
		{"source":"3","target":"103","value":8,"color":"#FF8C26", "periode":"2"},
		{"source":"3","target":"104","value":8,"color":"#FF8C26", "periode":"2"},
		{"source":"4","target":"105","value":8,"color":"#F1B206", "periode":"3"},
		{"source":"4","target":"106","value":8,"color":"#F1B206", "periode":"3"},
		{"source":"5","target":"107","value":8,"color":"#F1B206", "periode":"3"},
		{"source":"6","target":"108","value":8,"color":"#F1B206", "periode":"3"},
		{"source":"6","target":"109","value":8,"color":"#F1B206", "periode":"3"},
		{"source":"6","target":"110","value":8,"color":"#F1B206", "periode":"3"},
		{"source":"8","target":"111","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"8","target":"112","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"8","target":"113","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"8","target":"12","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"8","target":"13","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"9","target":"114","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"9","target":"15","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"9","target":"16","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"10","target":"161","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"10","target":"116","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"11","target":"113","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"11","target":"117","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"12","target":"117","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"12","target":"11","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"13","target":"8","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"13","target":"118","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"14","target":"119","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"14","target":"120","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"14","target":"116","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"15","target":"16","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"15","target":"121","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"15","target":"122","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"16","target":"15","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"16","target":"122","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"16","target":"123","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"16","target":"113","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"17","target":"124","value":8,"color":"#5AA744", "periode":"4"},
		{"source":"18","target":"125","value":8,"color":"#2D7CFF", "periode":"5"},
		{"source":"19","target":"126","value":8,"color":"#2D7CFF", "periode":"5"},
		{"source":"20","target":"127","value":8,"color":"#2D7CFF", "periode":"5"},
		{"source":"22","target":"128","value":8,"color":"#2D7CFF", "periode":"5"},
		{"source":"23","target":"129","value":8,"color":"#2D7CFF", "periode":"5"},
		{"source":"24","target":"130","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"24","target":"131","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"24","target":"160","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"24","target":"159","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"159","target":"160","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"25","target":"132","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"27","target":"133","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"33","target":"134","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"35","target":"135","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"36","target":"136","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"36","target":"137","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"36","target":"138","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"37","target":"139","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"37","target":"140","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"38","target":"141","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"38","target":"142","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"39","target":"143","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"40","target":"144","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"40","target":"145","value":8,"color":"#D262C6", "periode":"6"},
		{"source":"41","target":"146","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"42","target":"147","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"43","target":"148","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"45","target":"149","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"46","target":"150","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"47","target":"151","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"47","target":"48","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"48","target":"152","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"48","target":"153","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"50","target":"45","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"51","target":"155","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"51","target":"156","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"56","target":"157","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"58","target":"158","value":8,"color":"#FF80CF", "periode":"7"},
		{"source":"49","target":"154","value":8,"color":"#FF80CF", "periode":"7"}
		]

		//Nodes
		 var nodesTotal = [
		{"name":"Les soeurs de l'évêque de Lodève","group":6, "img":"img/profils/1.jpg", "id":"1", "periode":"1"},
		{"name":"La belle Maguelonne","group":6, "img":"img/profils/1.jpg", "id":"2", "periode":"1"},
		{"name":"Marie de Montpellier","group":6, "img":"img/profils/marie de montpellier.png", "id":"3", "periode":"2"},
		{"name":"Jeanne de Sos","group":8, "img":"img/profils/1.jpg", "id":"4", "periode":"3"},
		{"name":"Madame Béatrix","group":4, "img":"img/profils/1.jpg", "id":"5", "periode":"3"},
		{"name":"Francèse de Cézelli","group":1, "img":"img/profils/Francèse de Cézelli.png", "id":"6", "periode":"3"},
		{"name":"Madame de Sévigné","group":1, "img":"img/profils/1.jpg", "id":"8", "periode":"4"},
		{"name":"Madame Dunoyer","group":7, "img":"img/profils/Madame Dunoyer.png", "id":"9", "periode":"4"},
		{"name":"Anne-Marie-Louise d'Orléans","group":1, "img":"img/profils/Anne-Marie-Louise d'Orléans.png", "id":"10", "periode":"4"},
		{"name":"Isabeau de Bonzi","group":9, "img":"img/profils/Isabeau de Bonzi.png", "id":"11", "periode":"4"},
		{"name":"Françoise de la Croix de Castries","group":9, "img":"img/profils/1.jpg", "id":"12", "periode":"4"},
		{"name":"Françoise de La Roche","group":9,"img":"img/profils/1.jpg", "id":"13", "periode":"4"},
		{"name":"Anne-Madelaine de Conty d'Argencourt","group":1, "img":"img/profils/Anne_Madelaine_de_Conty_dargencourt.png", "id":"14", "periode":"4"},
		{"name":"Gabrielle de Gévaudan","group":9, "img":"img/profils/1.jpg", "id":"15", "periode":"4"},
		{"name":"Jeanne de Gévaudan","group":9, "img":"img/profils/jeanne_de_gévaudan_comtesse_de_ganges.png", "id":"16", "periode":"4"},
		{"name":"Françoise de Bon","group":9, "img":"img/profils/baronne_de_murles.png", "id":"17", "periode":"4"},
		{"name":"Judith de Saussure","group":9, "img":"img/profils/1.jpg", "id":"18", "periode":"5"},
		{"name":"Demoiselle Pagès","group":5, "img":"img/profils/1.jpg", "id":"19", "periode":"5"},
		{"name":"Marie Blayne","group":7, "img":"img/profils/1.jpg", "id":"20", "periode":"5"},
		{"name":"Catherine Trillet","group":4, "img":"img/profils/1.jpg", "id":"22", "periode":"5"},
		{"name":"Jeanne-Marie Latour","group":1, "img":"img/profils/1.jpg", "id":"23", "periode":"5"},
		{"name":"Albine de Vassal","group":1, "img":"img/profils/Albine_de_Vassal.png", "id":"24", "periode":"6"},
		{"name":"Madame Louis Figuier","group":7, "img":"img/profils/1.jpg", "id":"25", "periode":"6"},
		{"name":"Virginie Montagnol","group":2, "img":"img/profils/Virginie Montagnol.png", "id":"27", "periode":"6"},
		{"name":"Marie Giniez","group":5, "img":"img/profils/1.jpg", "id":"33", "periode":"6"},
		{"name":"Lydie Wilson","group":3, "img":"img/profils/Lydie Wilson.png", "id":"35", "periode":"6"},
		{"name":"Augusta Barbet","group":9, "img":"img/profils/1.jpg", "id":"36", "periode":"6"},
		{"name":"Marie Joséphine Anne Fabrège","group":2, "img":"img/profils/Marie Joséphine Anne Fabrège.png", "id":"37", "periode":"6"},
		{"name":"Camille Vialars","group":7, "img":"img/profils/camille_vialars_(robe bleu).png", "id":"38", "periode":"6"},
		{"name":"Maria del Pilar de San Menat","group":9, "img":"img/profils/1.jpg", "id":"39", "periode":"6"},
		{"name":"Marie Brondel de Roquevaire","group":3, "img":"img/profils/Marie Brondel de Roquevaire.png", "id":"40", "periode":"6"},
		{"name":"Madame Hélène Tissié","group":7, "img":"img/profils/1.jpg", "id":"41", "periode":"7"},
		{"name":"Hélène de Savoie","group":6, "img":"img/profils/Hélène de Savoie.png", "id":"42", "periode":"7"},
		{"name":"Emma Calvé","group":10, "img":"img/profils/Emma Calvé.png", "id":"43", "periode":"7"},
		{"name":"Simone Demangel","group":8, "img":"img/profils/Simone Demangel.png", "id":"45", "periode":"7"},
		{"name":"Laure Moulin","group":8, "img":"img/profils/Laure Moulin.png", "id":"46", "periode":"7"},
		{"name":"Sabine Zlatin","group":8, "img":"img/profils/sabine_zlatin.png", "id":"47", "periode":"7"},
		{"name":"Marie-Antoinette Pallarès","group":8, "img":"img/profils/1.jpg", "id":"48", "periode":"7"},
		{"name":"Elise-Suzanne Tsitskichvili","group":11, "img":"img/profils/1.jpg", "id":"49", "periode":"7"},
		{"name":"Jeanne Atger","group":8, "img":"img/profils/1.jpg", "id":"50", "periode":"7"},
		{"name":"Jeanne Galzy","group":7, "img":"img/profils/Jeanne Galzy.png", "id":"51", "periode":"7"},
		{"name":"Albertine Sarrazin","group":3, "img":"img/profils/Albertine_Sarrazin.png", "id":"56", "periode":"7"},
		{"name":"Hélène Mandroux","group":5, "img":"img/profils/1.jpg", "id":"58", "periode":"7"},	
		{"name":"Saint Fulcran de Lodève","group":11, "img":"img/profils/fulcran.png", "id":"100", "periode":"99"},
		{"name":"Pierre, comte de Provence","group":11, "img":"img/profils/1.jpg", "id":"101", "periode":"99"},  
		{"name":"Guilhem VIII","group":11, "img":"img/profils/1.jpg", "id":"102", "periode":"99"},
		{"name":"Empereur de Byzance","group":11, "img":"img/profils/empereur_de_byzance.png", "id":"103", "periode":"99"},
		{"name":"Pierre d'Aragon","group":11, "img":"img/profils/pierre_daragon.png", "id":"104", "periode":"99"},
		{"name":"Pierre de Sos","group":11, "img":"img/profils/1.jpg", "id":"105", "periode":"99"},
		{"name":"Docteur Saporta","group":11, "img":"img/profils/1.jpg", "id":"106", "periode":"99"},
		{"name":"Laurent Catalan","group":11, "img":"img/profils/1.jpg", "id":"107", "periode":"99"},
		{"name":"Jean de Cézelli","group":11, "img":"img/profils/1.jpg", "id":"108", "periode":"99"},
		{"name":"Marguerite de Beauvoir de Grimoard du Roure","group":11, "img":"img/profils/1.jpg", "id":"109", "periode":"99"},
		{"name":"Jean Antoine de Bourcier de Pontant","group":11, "img":"img/profils/1.jpg", "id":"110", "periode":"99"},
		{"name":"Henry Sévigné","group":11, "img":"img/profils/henri_de_sevigne.png", "id":"111", "periode":"99"},
		{"name":"Françoise Marguerite de Sévigné","group":11, "img":"img/profils/1.jpg", "id":"112", "periode":"99"},
		{"name":"Cardinal de Bonzi","group":11, "img":"img/profils/cardinal_de_bonzi.png", "id":"113", "periode":"99"},
		{"name":"Dunoyer","group":11, "img":"img/profils/1.jpg", "id":"114", "periode":"99"},
		{"name":"Sabine Zlatin","group":11, "img":"img/profils/sabine_zlatin.png", "id":"115", "periode":"99"},
		{"name":"Roi Louis XIV","group":11, "img":"img/profils/louis_xiv.png", "id":"116", "periode":"99"},
		{"name":"René-Gaspard de la Croix","group":11, "img":"img/profils/1.jpg", "id":"117", "periode":"99"},
		{"name":"Claude de la Roche","group":11, "img":"img/profils/1.jpg", "id":"118", "periode":"99"},
		{"name":"Madame de la Motte-d'Argencourt","group":11, "img":"img/profils/1.jpg", "id":"119", "periode":"99"},
		{"name":"Reine-Mère Anne d'Autriche","group":11, "img":"img/profils/anne_dautriche.png", "id":"120", "periode":"99"},
		{"name":"Henri de Mariotte","group":11, "img":"img/profils/1.jpg", "id":"121", "periode":"99"},
		{"name":"Charles de Gévaudan","group":11, "img":"img/profils/1.jpg", "id":"122", "periode":"99"},
		{"name":"François de Vissec de la Tude","group":11, "img":"img/profils/1.jpg", "id":"123", "periode":"99"},
		{"name":"François de Montlaur","group":11, "img":"img/profils/1.jpg", "id":"124", "periode":"99"},
		{"name":"Voltaire","group":11, "img":"img/profils/voltaire.png", "id":"125", "periode":"99"},
		{"name":"Sieur Marinier","group":11, "img":"img/profils/1.jpg", "id":"126", "periode":"99"},
		{"name":"Antoine Comte","group":11, "img":"img/profils/1.jpg", "id":"127", "periode":"99"},
		{"name":"Marquis de Sade","group":11, "img":"img/profils/Marquis_de_Sade.png", "id":"128", "periode":"99"},
		{"name":"Casanova","group":11, "img":"img/profils/Casanova.png", "id":"129", "periode":"99"},
		{"name":"Marquis de Vassal","group":11, "img":"img/profils/1.jpg", "id":"130", "periode":"99"},
		{"name":"Charle de Montholon","group":11, "img":"img/profils/Montholon.png", "id":"131", "periode":"99"},
		{"name":"Louis Figuier","group":11, "img":"img/profils/1.jpg", "id":"132", "periode":"99"},
		{"name":"Père André Soulas","group":11, "img":"img/profils/pere_soulas.png", "id":"133", "periode":"99"},
		{"name":"Giniez","group":11, "img":"img/profils/1.jpg", "id":"134", "periode":"99"},
		{"name":"Xavier de Ricard","group":11, "img":"img/profils/xavier_de_ricard.png", "id":"135", "periode":"99"},
		{"name":"Charles Huc","group":11, "img":"img/profils/1.jpg", "id":"136", "periode":"99"},
		{"name":"Raymond-Joseph Estève","group":11, "img":"img/profils/1.jpg", "id":"137", "periode":"99"},
		{"name":"Louis-Amédée Bonnal","group":11, "img":"img/profils/1.jpg", "id":"138", "periode":"99"},
		{"name":"Jacques Bonaventure Fabrège","group":11, "img":"img/profils/1.jpg", "id":"139", "periode":"99"},
		{"name":"Frédéric Fabrège","group":11, "img":"img/profils/1.jpg", "id":"140", "periode":"99"},
		{"name":"Gaston Bazille","group":11, "img":"img/profils/1.jpg", "id":"141", "periode":"99"},
		{"name":"Frédéric Bazille","group":11, "img":"img/profils/frederic_bazille.png", "id":"142", "periode":"99"},
		{"name":"Constantin de Dax","group":11, "img":"img/profils/1.jpg", "id":"143", "periode":"99"},
		{"name":"Charles de Rovira","group":11, "img":"img/profils/1.jpg", "id":"144", "periode":"99"},
		{"name":"Paul Valéry","group":11, "img":"img/profils/paul_valery.png", "id":"145", "periode":"99"},
		{"name":"Alphonse Tissié","group":11, "img":"img/profils/alphonse_tissie.png", "id":"146", "periode":"99"},
		{"name":"Victor-Emmanuel III","group":11, "img":"img/profils/victor_emmanuel_iii.png", "id":"147", "periode":"99"},
		{"name":"Jules Bois","group":11, "img":"img/profils/jules_bois.png", "id":"148", "periode":"99"},
		{"name":"Robert Demangel","group":11, "img":"img/profils/1.jpg", "id":"149", "periode":"99"},
		{"name":"Jean Moulin","group":11, "img":"img/profils/jean_moulin.png", "id":"150", "periode":"99"},
		{"name":"Miron Zlatin","group":11, "img":"img/profils/miron_zlatin.png", "id":"151", "periode":"99"},
		{"name":"Renée Pallarès","group":11, "img":"img/profils/renee_pallares.png", "id":"152", "periode":"99"},
		{"name":"Paulette Pallarès","group":11, "img":"img/profils/paulette_pallares.png", "id":"153", "periode":"99"},
		{"name":"Georges Charpak","group":11, "img":"img/profils/1.jpg", "id":"154", "periode":"99"},
		{"name":"Léon Baraduc","group":11, "img":"img/profils/1.jpg", "id":"155", "periode":"99"},
		{"name":"Emilie Blanche Guillot","group":11, "img":"img/profils/1.jpg", "id":"156", "periode":"99"},
		{"name":"Julien Sarrazin","group":11, "img":"img/profils/julien_sarrazin.png", "id":"157", "periode":"99"},
		{"name":"George Frêche","group":11, "img":"img/profils/georges_freche.png", "id":"158", "periode":"99"},
		{"name":"Joséphine-Napoléone","group":11, "img":"img/profils/1.jpg", "id":"159", "periode":"99"},
		{"name":"Napoléon","group":11, "img":"img/profils/napoleon.png", "id":"160", "periode":"99"},
		{"name":"Gaston de France","group":11, "img":"img/profils/gaston_de_france.png", "id":"161", "periode":"99"}
		]

	//////// Subset for select periode ////////
	$("input[name='periode']").change(function(){
		var periodeNet = []; // initier liste periodes choisies
		$.each($("input[name='periode']:checked"), function(){ 
			periodeNet.push($(this).val());
		}); 
	
		links = [];
		noeudAselectionner = [];
		for (i = 0; i < linksTotal.length; i++) {
			if (periodeNet.indexOf(linksTotal[i]["periode"]) > -1){
				links.push(linksTotal[i]);
				
				noeudAselectionner.push(linksTotal[i]["source"]);
				noeudAselectionner.push(linksTotal[i]["target"]);
			}
		}

		nodes = [];
		for(i = 0; i < nodesTotal.length; i++){
			if (noeudAselectionner.indexOf(nodesTotal[i]["id"]) > -1){
				nodes.push(nodesTotal[i]);
			}	
		}
		
		// linked noeud.id to link.source & link.target
		links = links.map(function(l) {
		  var sourceNode = nodes.filter(function(n) {
			  return n.id === l.source;
			})[0],
			targetNode = nodes.filter(function(n) {
			  return n.id === l.target;
			})[0];

		  return {
			source: sourceNode,
			target: targetNode,
			value: l.value,
			color: l.color
		  };
		});
		
		var width = 1000;
		height = 1000;
			
		var color = d3.scale.category20();

		//Simulation
		var force = d3.layout.force()
		.nodes(d3.values(nodes))
		.links(links)
		.size([width, height])
		.linkDistance(40)
		.charge(-160)
		.on("tick", tick)
		.start();

		//SVG
		d3.select("#reseau").select("svg").remove();
		var svg = d3.select("#reseau").append("svg")
		.attr("width", width)
		.attr("height", height);

		//Edges
		var link = svg.selectAll(".link")
		.data(force.links())
		.enter().append("line")
		.attr("class", "link")
		.style("stroke-width", function(d) { return Math.sqrt(d.value); })
		.style("stroke", function(d) { return d.color });	

		//Nodges
		var node = svg.selectAll(".node")
		.data(force.nodes())
		.enter().append("g")
		.attr("class", "node")
		.style("opacity", 0.9)
		.on("mouseover", mouseover)
		.on("mouseout", mouseout)
		.call(force.drag);

		//Photos de profil
		node.append("svg:image")
		.attr("xlink:href", function(d) { return d.img })
		.attr("x", -8)
		.attr("y", -8)
		.attr("width", 30)
		.attr("height", 30);

		//Textes name + relations 
		node.append("svg:text")
		.attr("class", "nodetext")
		.attr("dx", 12)
		.attr("dy", ".35em")
		.html(function (d) {
		 return "<tspan x='0' dy='1.2em'>" + d.name + "</tspan>";
		})

		//Simulation dynamique
		function tick() {
		link
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

		node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		}

		//Mouseover
		function mouseover() {
		d3.select(this).select("text")
		.style("fill", "black")
		.style("stroke-width", ".5px")
		.style("font-weight", "bold")
		.style("font", "20px sans-serif")
		.style("opacity", 1)
		.attr("x", 13)
		.style("font-weight", "bold")
		}

		//Mouseout
		function mouseout() {
		d3.select(this).select("circle").transition()
		.duration(750)
		.attr("r", 8);
		}
	})
}