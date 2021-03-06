const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);

//set app port
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/www'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile('www/index.html');
});

server.listen(app.get('port'), function() {
	console.log("gestion-veto app is listening on port :  " + app.get('port'));
});