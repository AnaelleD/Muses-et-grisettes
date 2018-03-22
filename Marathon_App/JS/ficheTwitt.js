function affichageTimeLine() {
	d3.csv("Data/bd_femmes_mtp.csv", function(error,data) {
		var fiche=document.getElementById("fiche");
		var CARD1='<section class="card-single active" period="period1">'+
        	'<div class="content">'+
         '<p class="Nom">NOM  <span class="glyphicon glyphicon-eye-open CERTIF"></span></p>'+
         '<p class="titre">@</p>'+
         '<p class="Date"><span class="glyphicon glyphicon-calendar"></span></p>'+
         '<p class="Adress"><span class="glyphicon glyphicon-home"></span></p>'+
         '<p class="NomT1">@nomT1</p>'+
         '<p class="Twit1">twitt T1</p>'+
         '<p class="NomT2">@nom T2</p>'+
         '<p class="Twit2">Twitt2aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>'+
         '<p class="hashtag">#test</p>'+
         '<p class="Post"></p>'+
         '<p class="RT"><span class="glyphicon glyphicon-retweet"></span></p>'+
         '<p class="LIKE"><span class="glyphicon glyphicon-heart"></span></p>'+
         ' <img src="img/fiche.png" alt="Canevas" />'+
         '</div>'+
      '</section>' ;
     for (var i=0;i<data.length;i++) {	
     console.log(data);
     	var CARD2='<section class="card-single" period="period2">'+
        	'<div class="content">'+
         '<p class="Nom">'+data[i]["nom"]+'</p>'+
         '<p class="titre">@</p>'+
         '<p class="Date"><span class="glyphicon glyphicon-calendar"></span></p>'+
         '<p class="Adress"><span class="glyphicon glyphicon-home"></span></p>'+
         '<p class="NomT1">@nomT1</p>'+
         '<p class="Twit1">twitt T1</p>'+
         '<p class="NomT2">@nom T2</p>'+
         '<p class="Twit2">Twitt2aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>'+
         '<p class="hashtag">#test</p>'+
         '<p class="Post">'+data[i]["nb_twitt"]+'</p>'+
         ' <img src="img/fiche.png" alt="Canevas" />'+
         '</div>'+
      '</section>';
      CARD1+=CARD2;
  		}	
  			fiche.innerHTML=CARD1;
	});
}
affichageTimeLine()