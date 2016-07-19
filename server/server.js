var express = require('express');
var bodyParser = require('body-parser');
var routes = require('../routes/routes.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

const port = _getPort(process.env.NODE_ENV);
app.listen(port, function() {
    console.log('server is listening on port ' + port);
});

function _getPort(env){
	switch(env){
		case 'prod':
			return 80;
		case 'dev':
		default:
			return 3000;
	}
}