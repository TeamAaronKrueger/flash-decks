var express = require('express');
var router = express.Router();
var model = require('../models/Card');

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.find(function(error, cards){
    if (error) console.log(error);
    res.json(cards);
  })
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id,function(error, card){
    if (error) console.log(error);
    res.json(card);
  });
});

//create
router.post('/', function(req, res, next) {
  model.create(req.body, function(error, card){
    if (error) console.log(error);
    res.json(card);
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, card){
    if (error) console.log(error);
    res.json(card);
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(error, card){
    if (error) console.log(error);
    res.json(card);
  });
});

router.delete('/:id', function(req, res, next){
  model.findByIdAndRemove(req.params.id, req.body, function(error,card){
    if(error) console.log(error);
    res.json(card);
  });

});

module.exports = router;
