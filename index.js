//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDb
mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

app.get('/', function (req, res) {
	res.send('Working');
})

//Server Start
app.listen(3000);
console.log('Server is up on port 3000');