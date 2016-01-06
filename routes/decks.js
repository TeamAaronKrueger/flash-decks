var express = require('express');
var router = express.Router();
var model = require('../models/Deck');

/* GET decks listing. */
router.get('/', function(req, res, next) {
  model.find(function(error, decks){
    if (error) console.log(error);
    res.json(decks);
  })
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id,function(error, deck){
    if (error) console.log(error);
    res.json(deck);
  });
});

//create
router.post('/', function(req, res, next) {
  model.create(req.body, function(error, deck){
    if (error) console.log(error);
    res.json(deck);
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, deck){
    if (error) console.log(error);
    res.json(deck);
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, deck){
    if (error) console.log(error);
    res.json(deck);
  });
});

router.delete('/:id', function(req, res, next){
  model.findByIdAndRemove(req.params.id, req.body, function(error,deck){
    if(error) console.log(error);
    res.json(deck);
  });

});

module.exports = router;
