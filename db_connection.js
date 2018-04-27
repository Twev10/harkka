
var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "Kumiankka",
  password: "kumiankka66",
  server: {
	port: '3000'
    }
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected and listening to port 3000.");
});


 /*var sql = "INSERT INTO ankkadb (ankat) VALUES ('Suuri')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  }); */
  
/*con.query('SELECT * FROM ankat ',function(err, rows, fields) {
            //if(err) throw err
            if (err) {
              //  request.flash('error', err);
                res.render('ankkalist', {
                    title: 'Ankat', 
                    data: ''
                });
            } else {
                // render to views/omistajat/list.ejs template file
                res.render('ankkalist', {
                    title: 'Ankat', 
                    data: rows
                });
            }
        });*/

app.get('/rows', function (req, res) {
  connection.connect();  

  connection.query('SELECT * FROM ankkadb', function(err, rows, fields)   
  {  
      connection.end();

      if (err) throw err;  

      res.json(rows); 

  });
});

