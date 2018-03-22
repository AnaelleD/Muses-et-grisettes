$( function() {
	var	liste_femmes = ["Les soeurs de l'évêque de Lodève Saint Fulcran","La belle Maguelonne","Marie de Montpellier","Jeanne de Sos",
	"Madame Béatrix","Francèse de Cézelli","Elisabeth Bouissonnade","Madame de Sévigné","Madame Dunoyer","Anne-Marie-Louise d'Orléans",
	"Isabeau de Bonzi","Françoise de la Croix de Castries","Françoise de La Roche","Anne-Madelaine de Conty d'Argencourt",
	"Gabrielle de Gévaudan","Jeanne de Gévaudan","Françoise de Bon","Judith de Saussure","Demoiselle Pagès","Marie Blayne",
	"Elisabeth Coste","Catherine Trillet","Jeanne-Marie Latour","Albine de Vassal","Madame Louis Figuier","Mère Saint-Philippe de Vacquier",
	"Virginie Montagnol","Soeur Chagny","Demoiselle Doumergue","Louise Guiraud","Vicomtesse Jeanne de Charrin","Marie Reynès-Monlaur",
	"Marie Giniez","Paule Minc","Lydie Wilson ","Augusta Barbet","Marie Joséphine Anne Fabrège","Camille Vialars","Maria del Pilar de San Menat",
	"Marie Brondel de Roquevaire","Madame Hélène Tissié", "Hélène de Savoie","Emma Calvé","Juliette Gréco","Simone Demangel",
	"Laure Moulin","Sabine Zlatin","Marie-Antoinette Pallarès","Elise-Suzanne Tsitskichvili","Jeanne Atger","Jeanne Nizet",
	"Emilienne Demougeot","Michèle Weil","Armande Le Pellec-Müller","Jeanne Galzy","Albertine Sarrazin","Madeleine Attal","Hélène Mandroux"]

    $( "#search_bar" ).autocomplete({
      source: liste_femmes
    });
});