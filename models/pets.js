var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newPetSchema = new Schema({
  pet_name: String,
  animal: String,
  age: Number,
  petPicURL: String
});


var newPet = mongoose.model('pets', newPetSchema);

module.exports = newPet;
