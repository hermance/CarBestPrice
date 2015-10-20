module.exports = function(url){
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
app.get('/search', function(req, res){
 var myMarque = req.param('marque');
 var myModele = req.param('modele');
 var myAnnee = req.param('annee');
 var myPrix = req.param('price');
 var newData, newURL;
 //on a les parmas maintenant faut faire une belle URL de recherche lacentrale
 var myURL = "http://www.lacentrale.fr/cote-voitures-"+myMarque+"-"+myModele + "--"+myAnnee+"-.html";
 var myCote;
 //console.log(myURL);//ON est OK
 
	request(myURL, function(error, response, html){
	if(!error){
		var $ = cheerio.load(html);
		
		$('.tdSD a').filter(function(){

                var data = $(this);
				data = data.toString();
				//console.log('data : ' + data);
				newData = data.substring(data.indexOf('href')+6,data.indexOf('.html')+5);
				//console.log(newData);
				newURL ="http://lacentrale.fr/"+newData;
				//console.log("NEW URL : "+newURL);
					
					request(newURL, function(err, resp, html){
					if(!error){
					//console.log("ARE WE THERE YET?");
						//WHERE WE WILL GET THE COTE AND EVERYTHING FROM LACENTRALE
						var $ = cheerio.load(html);
						$('.Result_Cote').filter(function(){
							 var data = $(this);
							data = data.toString();
							//console.log('data : ' + data);
							myCote = data.substring(data.indexOf('Result_Cote arial tx20')+24,data.indexOf(' &#x20AC;</span>'));
							//console.log(myCote);
							res.render('page2.ejs', {url :newURL, cote:myCote, marque : myMarque, modele : myModele, annee:myAnnee, prix : myPrix});
							
						})
					}
					else{
					console.log("NOPE"+err);
					}
				})
				
            })
		}
	

	else{
		console.log("ERROR " + error);
	}
	})

	//res.send('CHeck your console!');
	
   })


app.listen('8080');
}

