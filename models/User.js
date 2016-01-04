var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  Name: String,
  Ingredients: String,
  Alcohol: String,
  Neat: Boolean
});

module.exports = mongoose.model('User',UserSchema);
