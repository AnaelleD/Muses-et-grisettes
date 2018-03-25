function network(){
	
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
			color: l.color,
			relation: l.relation
		  };
		});
		
		var width = 1000;
		height = 600;
			
		var color = d3.scale.category20();

		//Simulation
		var force = d3.layout.force()
		.nodes(d3.values(nodes))
		.links(links)
		.size([width, height])
		.linkDistance(100)
		.charge(-250)
		.on("tick", tick)
		.start();

		//SVG
		d3.select("#reseau").select("svg").remove();
		var svg = d3.select("#reseau").append("svg")
		.attr("width", width)
		.attr("height", height)
		//ZOOM
		.call(d3.behavior.zoom().on("zoom", function () {svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")}))
		.on('mousedown.zoom',null)
		.append("g");
		

		// Graph Orienté
		svg.append("svg:defs").selectAll("marker")
		.data(["end"])      
		.enter().append("svg:marker") 
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 15)
		.attr("refY", -1.5)
		.attr("markerWidth", 4)
		.attr("markerHeight", 4)
		.attr("orient", "auto")
		.append("svg:path")
		.attr("d", "M0,-5L10,0L0,5");
		
		//Edges
		var g = svg.selectAll(".link")
		.data(force.links())
		.enter().append("g");
		var link = g.append("line")
		.attr("class", "link")
		.style("stroke-width", function(d) { return Math.sqrt(d.value); })
		.style("stroke", function(d) { return d.color })
		.attr("marker-end", "url(#end)")
		
		var text = g.append("text")
		.attr('text-anchor', 'middle')
		.attr("dy", "0.5em")
		.style("font", "15px sans-serif")
		.text(function(d) { return d.relation; })
		.style("fill", function(d) { return d.color; });

		//Nodes
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

		//Textes name
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
		
		text.attr("x", function(d) {return (d.target.x+d.source.x)/2; })
			.attr("y", function(d) { return (d.target.y+d.source.y)/2; });

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
	
	
	
	
	
		//////// Subset for select women ////////
	$("#search_button").click(function() {
		var femme_choisie = $( "#search_bar" ).val();
			
			
		nodeFemme = []; // le noeud de la femme selectionee
		for(i = 0; i < nodesTotal.length; i++){
			if (nodesTotal[i]["name"] === femme_choisie){
				nodeFemme.push(nodesTotal[i]);
			}
		}
		
		links = [];
		noeudAselectionner = [];
		noeudAselectionner.push(nodeFemme[0]["id"]); // Ajout id femme selectionnee
		for (i = 0; i < linksTotal.length; i++) {
			if (linksTotal[i]["source"] === nodeFemme[0]["id"] ){
				links.push(linksTotal[i]);
				noeudAselectionner.push(linksTotal[i]["target"]); // Ajout lien 
			}
			if (linksTotal[i]["target"] === nodeFemme[0]["id"] ){
				links.push(linksTotal[i]);
				noeudAselectionner.push(linksTotal[i]["source"]); // Ajout lien 
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
			color: l.color,
			relation: l.relation
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
		.linkDistance(100)
		.charge(-250)
		.on("tick", tick)
		.start();

		//SVG
		d3.select("#reseau").select("svg").remove();
		var svg = d3.select("#reseau").append("svg")
		.attr("width", width)
		.attr("height", height)
		.call(d3.behavior.zoom().on("zoom", function () {svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")}))
		.on('mousedown.zoom',null)
		.append("g");
		
		// Graph Orienté
		svg.append("svg:defs").selectAll("marker")
		.data(["end"])      
		.enter().append("svg:marker") 
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 15)
		.attr("refY", -1.5)
		.attr("markerWidth", 4)
		.attr("markerHeight", 4)
		.attr("orient", "auto")
		.append("svg:path")
		.attr("d", "M0,-5L10,0L0,5");
		
		//Edges
		var g = svg.selectAll(".link")
		.data(force.links())
		.enter().append("g");
		var link = g.append("line")
		.attr("class", "link")
		.style("stroke-width", function(d) { return Math.sqrt(d.value); })
		.style("stroke", function(d) { return d.color })
		.attr("marker-end", "url(#end)")
		
		var text = g.append("text")
		.attr('text-anchor', 'middle')
		.attr("dy", "0.5em")
		.style("font", "15px sans-serif")
		.text(function(d) { return d.relation; })
		.style("fill", function(d) { return d.color; });

		//Nodes
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
		
		text.attr("x", function(d) {return (d.target.x+d.source.x)/2; })
			.attr("y", function(d) { return (d.target.y+d.source.y)/2; });

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