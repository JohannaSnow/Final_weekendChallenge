var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newPetSchema = new Schema({
  pet_name: String,
  animal: String,  //Can also do: {type: String, enum: ['dog', 'cat', 'chicken', 'other']},
  age: Number,
  petPicURL: String // can also do: {type: String, default: "http://www.nyan.cat/images/cat/4.gif"} / or any default image you want(from live solve)
});


var petModel = mongoose.model('pets', newPetSchema);

module.exports = petModel;
