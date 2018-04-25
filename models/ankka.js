 var mongoose = require('mongoose'); 
   
 var Schema = mongoose.Schema; 
   
 var AnkkaSchema = new Schema( 
   { 
   title: {type: String, required: true}, 
   color: {type: Schema.ObjectId, ref: 'Color', required: true} 
   } 
 ); 
 
  AnkkaSchema 
   .virtual('url') 
   .get(function () { 
   return '/catalog/ankka/' + this._id; 
  }); 
   
   
 module.exports = mongoose.model('Ankka', AnkkaSchema); 
   
   
   