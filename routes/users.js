var express = require('express');
var router = express.Router();
var model = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.find(function(error, users){
    if (error) console.log(error);
    res.json(users);
  })
});

module.exports = router;
