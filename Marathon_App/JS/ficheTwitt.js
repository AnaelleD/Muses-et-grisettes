function affichageTimeLine() {
	
	d3.csv("Data/bd_femmes_mtp.csv", function(error,data) {
		var fiche=document.getElementById("fiche");
		var CARD1='<section id="f1" class="card-single active" period="period'+data[0]["periode"]+'">'+
        	'<div class="content">'+
         '<p class="Nom"><span class="glyphicon glyphicon-eye-open CERTIF"> </span> '+data[0]["nom"]+'</p>'+
         '<p class="titre">@'+data[0]["titre"]+'</p>'+
         '<p class="Date"><span class="glyphicon glyphicon-calendar"> '+data[0]["dateNaissance"]+'-'+data[0]["dateMort"]+'~'+data[0]["dateApprox"]+'</span></p>'+
         '<p class="Adress"><span class="glyphicon glyphicon-home"> '+data[0]["adresse"]+'</span></p>'+
         '<p class="NomT1">@'+data[0]["nom"]+'</p>'+
         '<p class="Twit1">'+data[0]["tweet1"]+'</p>'+
         '<p class="NomT2">@'+data[0]["nom"]+'</p>'+
         '<p class="Twit2">'+data[0]["tweet2"]+'</p>'+
         '<p class="hashtag">#'+data[0]["motCles"]+'</p>'+
         '<p class="Post"></p>'+
         '<p class="RT"><span class="glyphicon glyphicon-retweet"></span></p>'+
         '<p class="LIKE"><span class="glyphicon glyphicon-heart"></span></p>'+
         ' <img src="img/PP/1.png" alt="Canevas" />'+
         '</div>'+
      '</section>' ;

     for (var i=1;i<data.length;i++) {	
		var j=i+1;
     	var CARD2='<section id="f'+j+'" class="card-single" period="period'+data[i]["periode"]+'">'+
        	'<div class="content">'+
         '<p class="Nom">'+data[i]["nom"]+'</p>'+
         '<p class="titre">@'+data[i]["titre"]+'</p>'+
         '<p class="Date"><span class="glyphicon glyphicon-calendar"> '+data[i]["dateNaissance"]+'-'+data[i]["dateMort"]+'~'+data[i]["dateApprox"]+'</span></p>'+
         '<p class="Adress"><span class="glyphicon glyphicon-home"> '+data[i]["adresse"]+'</span></p>'+
         '<p class="NomT1">@'+data[i]["nom"]+'</p>'+
         '<p class="Twit1">'+data[i]["tweet1"]+'</p>'+
         '<p class="NomT2">@'+data[i]["nom"]+'</p>'+
         '<p class="Twit2">'+data[i]["tweet2"]+'</p>'+
         '<p class="hashtag">#'+data[i]["motCles"]+'</p>'+
         '<p class="Post">'+data[i]["nb_tweet"]+'</p>'+
			'<p class="RT"><span class="glyphicon glyphicon-retweet"></span></p>'+
         '<p class="LIKE"><span class="glyphicon glyphicon-heart"></span></p>'+
         ' <img src="img/PP/'+j+'.png" alt="Canevas" />'+
         '</div>'+
      '</section>';
      CARD1+=CARD2;
  		}	
  			fiche.innerHTML=CARD1;
	});
	
}
affichageTimeLine()

