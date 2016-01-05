var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/welcome');
});

router.get('/decks', function(req, res, next) {
  var currentDeck = req.val();



  res.render('pages/deckview');
  console.log(currentDeck);
});

module.exports = router;
