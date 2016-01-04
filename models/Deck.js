var mongoose = require('mongoose');

var DeckSchema = new mongoose.Schema({
  Name: String,
  Ingredients: String,
  children: [CardSchema],
  Neat: Boolean
});

module.exports = mongoose.model('Deck', DeckSchema);
