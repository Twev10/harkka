

var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 


var conn = mysql.createConnection({
	host: '127.0.0.1',
	user: 'Kumiankka',
	password: 'kumiankka66',
	database: 'ankkadb',
	server: {
		port: '3000'
	}
});



/*router.get('/', function(req, res, next) {
	
	
	res.render('addnew' , {title: 'oi'});
});*/


	router.post('/myaction', function(req, res) {
	console.log(req.body.ankka);
	console.log(req.body.color);
	res.write('You sent the ankka "' + req.body.ankka+'".\n');
	res.write('You sent the color "' + req.body.color+'".\n');
	res.end()

	var sql = "INSERT INTO `ankat` (`Ankka`, `Color`) VALUES ('"+req.body.ankka+"','"+req.body.color+"')";
	conn.query(sql,function(err, result){      
	                                                     
  if (err)
     throw err;
	}
);
});
app.listen(3001);
console.log('ghg');

res.render('myaction', { title: 'Express' });
	


module.exports = router;