#CarSearching

This is the JSON organisation for the car in Leboncoin

{
	"title":"Cars from Leboncoin"
	"type":"object",
	"properties": {
		"prix": {
			"type":"string"
		},
		"adresse": {
			"ville":{
				"type":"string"
				},
			"CP":{
				"type":"integer"
			}
		},
		"marque": {
			"type":"string"
		},
		"modèle": {
			"type":"string"
		},
		"année": {
			"type":"string"
		},
		"kilométrage": {
			"type":"integer"
		},
		"carburant": {
			"type":"string"
		},
		"boiteDeVitesse": {
			"type":"string"
		},
		"Description": {
			"SIREN":{
				"type":"integer"			
			},
			"DateMiseEnLigne":{
				"type"="string"
			},
			"emmeteur":{
				"type":"string"
			},
			"annonce":{
				"type":"string"
			}
		}
	
	}
	"required" : ["prix","année","marque","modèle","adresse","kilometrage","carburant","boiteDeVitesse"]

}




This is the JSON organisation for the car in Lacentrale

{
	"title":"Cars from Lacentrale"
	"type":"object",
	"properties": {
		"cote": {
			"type":"integer"
		},
		"adresse": {
			"ville":{
				"type":"string"
				},
			"CP":{
				"type":"integer"
			}
		},
		"marque": {
			"type":"string"
		},
		"modèle": {
			"type":"string"
		},
		"categorie": {
			"type":"string"
		},
		"année": {
			"type":"string"
		},
		"kilométrage": {
			"type":"integer"
		},
		"carburant": {
			"type":"string"
		},
		"boiteDeVitesse": {
			"type":"string"
		},
		"chevaux": {
			"type":"integer"
		},
		"nbDePortes": {
			"type":"string"
		},
	
	}
	"required" : ["categorie","marque","modèle","annee"]

}


#User FLow :
Here is what I imagine how the app will work : 
1) The user select some queries (chose betweem some options in a menu, ...) to do his search
2) Make the URL
3) Connect with the url to leboncoin
4) Get the response, parse it to have JSON
5) Do step 3 and 4 with lacentrale. We have now the JSON of lacentrale and leboncoin (with the good keywords)
6) Compare results
7) Organize the results to present the user the most interesting options, with the best 'cote' for his search
8) Make him pay to see 'all results'

This is the basic Idea.

The web app will be simple and fluidd : just some fields to fill or choose and a "search" button. The result page
must be the same way. Just the interesting infos, well presented, easy to understand, and easy to know how to buy.
The color : mostlyshades of blue. Big green button for search. Nice modern typo.