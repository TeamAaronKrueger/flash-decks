var mongoose = require('mongoose');

var DeckSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Public: Boolean,
  User: String,
  Cards: [CardSchema]
});

module.exports = mongoose.model('Deck', DeckSchema);
