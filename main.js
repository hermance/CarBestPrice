var leboncoin  = require('./leboncoin.js');
var lacentrale  = require('./lacentrale.js');
var url = 'http://www.leboncoin.fr/voitures/852693116.htm?ca=12_s';
leboncoin(url, function(err, res) {
	if(err)
		return console.error('NOPE', err);
	console.log('POUET');
});
lacentrale(url, function(err, res) {
	if(err)
		return console.error('NOPENOPE', err);
	console.log('POUETPOUET');
});