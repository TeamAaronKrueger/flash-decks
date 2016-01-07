var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  Question: String,
  Answer: String,
  DeckName: String,
  User: String
});

module.exports = mongoose.model('Card',CardSchema);
