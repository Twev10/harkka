
var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'Kumiankka',
  password: 'kumiankka66',
  database: 'ankkadb',
  server: {
	port: '3000'
    }
});

con.connect(function(err) {
  if (err) throw err;
  
  console.log("Connected and listening to port 3000.");
  });
  
 /* render: function(render) {
    res.resData.response = render;
    return res;
}*/
  
  con.query('SELECT * FROM ankat', function(err, rows, fields, res) {
    
 /*   if (err) {
		res.render('ankkalist', {
		title: 'Ankat', 
		data: ''
                })
	} else {

		res.render('ankkalist', {
		title: 'Ankat', 
		data: rows
                })
        
        console.log(err);
        
       
    }*/
    
     console.log(rows);
        
  
});
  /*
  con.query("SELECT * FROM ankkadb", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
/*con.connect(function(err) {
  if (err) throw err;
    con.query("SELECT * FROM ankkadb", function (err, result, fields) {
    if (err) throw err;
  console.log("Connected and listening to port 3000.");
  
});

/*con.query('SELECT * FROM ankat ',function(err, rows, fields, res, req) {
           
            if (err) {
				req.flash('error', err);
                res.render('ankkalist', {
                    title: 'Ankat', 
                    data: ''
                });
            } else {
                
                res.render('ankkalist', {
                    title: 'Ankat', 
                    data: rows
                });
            }
        });

/*app.get('/rows', function (req, res) {
  connection.connect();  

  connection.query('SELECT * FROM ankkadb', function(err, rows, fields)   
  {  
      connection.end();

      if (err) throw err;  

      res.json(rows); 

  });
});*/

