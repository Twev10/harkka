var add = require('./routes/add');
var tiedot = require('./routes/tiedot');
var galleria = require('./routes/galleria');
var express = require('express');
var http = require('http');
var app = express();
var pug = require('pug');
var path = require('path');		

var mysql = require('mysql');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/add', add);
app.use('/tiedot', tiedot);
app.use('/galleria', galleria);

app.use(express.static(path.join(__dirname, '/public')));

var conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'Kumiankka',
	password: 'kumiankka66',
	database: 'ankkadb',
	server: {
		port: '3000'
	}
});

conn.connect();

conn.query('SELECT * FROM ankat', function(err, rows, fields) {
	console.log(JSON.stringify(rows));
	let r = rows;
	app.get('/', function (req, res) {
		
	  res.render('mainpage', {
		  rows: rows
	  });
	});
  });
  

  app.listen(3001);
  
  module.exports = app;