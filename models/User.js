var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  PasswordHash: String
});

module.exports = mongoose.model('User',UserSchema);
