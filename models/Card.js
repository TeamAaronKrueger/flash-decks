var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  Name: String,
  Ingredients: String,
  Alcohol: String,
  Neat: Boolean
});

module.exports = mongoose.model('Card',CardSchema);
