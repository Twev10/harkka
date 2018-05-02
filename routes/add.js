
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
	
	res.render('addnew' , {title: 'oi'});
	
	
	
});


module.exports = router;

