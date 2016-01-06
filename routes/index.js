var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/welcome');
});

router.get('/deck/:deck', function(req, res, next) {
  var currentDeck = req.params.deck;
  res.render('pages/deckview');
  res.render('pages/welcome', { user: req.user });
});



module.exports = router;
