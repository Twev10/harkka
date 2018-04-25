 var mongoose = require('mongoose'); 
   
 var Schema = mongoose.Schema; 
   
 var ColorSchema = new Schema({ 
  first_name: {type: String, required: true, max: 100}, 
  family_name: {type: String, required: true, max: 100} 
 }); 
   
 ColorSchema.virtual('name'). 
  get(function() { return this.family_name + ', ' + this.first_name; 
 }); 
   
 ColorSchema.virtual('url'). 
  get(function() { return 'catalog/color/' + this._id; 
 }); 
   
 module.exports = mongoose.model('Color', ColorSchema); 
   