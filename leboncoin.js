module.exports = function(url){
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
app.get('/scrape', function(req, res){
 var myURL = req.param('url');
	request(myURL, function(error, response, html){
	if(!error){
		var $ = cheerio.load(html);
		var modele, marque,anneeModele;
		var json ={modele : "", marque : "", anneeModele : ""};
		
		$('.lbcParams').filter(function(){

                var data = $(this);
				data = data.toString();
				//console.log('data : ' + data);
				marque = data.substring(data.indexOf('<td itemprop="brand">')+21,data.indexOf('<th>Mod')-85); //CA MARCHE
				modele = data.substring(data.indexOf('<td itemprop="model">')+21,data.indexOf('<th>Ann')-58);
				anneeModele = data.substring(data.indexOf('<td itemprop="releaseDate">')+73,data.indexOf('<th>Kilom')-155);
				//km = data.substring(data.indexOf('<th>Kilométrage : </th>')+21,data.indexOf('<th>Carb')-22);
				console.log('MARQUE, modele, annee : ' + marque+
				' , ' + modele+' , '+ anneeModele);
				json.marque = marque;
				json.modele = modele;
				json.anneeModele = anneeModele;
				//json.km = km;
            })
		}
	
	fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
//we write everything on the json, and we will get it when needed for lacentrale from the json
    console.log('File successfully written! - Check your project directory for the output.json file');

	})

	//res.send('CHeck your console!');
	res.render('page.ejs', {url :myURL, marque : marque, modele : modele, annee : anneeModele});
	//window.location.href = "http://localhost:8081/show.html";
   })

})

app.listen('8081')
}
