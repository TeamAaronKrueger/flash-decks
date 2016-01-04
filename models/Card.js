var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  Question: String,
  Answer: String
});

module.exports = mongoose.model('Card',CardSchema);
