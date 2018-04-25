 var Ankka = require('../models/ankka'); 
 var Color = require('../models/color'); 
   
   
 var async = require('async'); 
   
 exports.index = function(req, res) { 
   
   async.parallel({ 
   ankka_count: function(callback) { 
   Ankka.count({}, callback); // Pass an empty object as match condition to find all documents of this collection 
   }, 
   color_count: function(callback) { 
   Color.count({}, callback); 
   } 
   
   }, function(err, results) { 
   res.render('index', { title: 'Local Library Home', error: err, data: results }); 
   }); 
 }; 
   
 exports.ankka_list = function(req, res, next) { 
   
   Ankka.find({},'title color'). 
   populate('color'). 
   exec(function(err,list_ankat) { 
   if (err) { return next(err); } 
   res.render('ankka_list', {title: 'Ankka List', ankka_list: list_ankat}) 
   }); 
   
 }; 
   
 exports.ankka_detail = function(req, res, next) { 
   
   async.parallel({ 
   ankka: function(callback) { 
   
   Ankka.findById(req.params.id) 
   .populate('color') 
   .exec(callback); 
   } 
   }, function(err, results) { 
   if (err) { return next(err); } 
   if (results.ankka==null) { // No results. 
   var err = new Error('Ankka not found'); 
   err.status = 404; 
   return next(err); 
   } 
   // Successful, so render. 
   res.render('ankka_detail', { title: 'Title', ankka: results.ankka, ankka_instances: results.ankka_instance } ); 
   }); 
   
 }; 
   