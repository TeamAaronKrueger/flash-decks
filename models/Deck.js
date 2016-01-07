var mongoose = require('mongoose');
var Card = require("./Card.js");

var DeckSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Public: Boolean,
  User: String,
});

module.exports = mongoose.model('Deck', DeckSchema);
