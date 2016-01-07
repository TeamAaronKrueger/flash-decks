var express = require('express');
var router = express.Router();
var model = require('../models/Deck');
var modelCards = require('../models/Card');


/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(function(error, decks){
      res.render('pages/welcome', {cards: decks});
    })
});

router.get('/mydecks', function(req, res, next) {
  model.find(function(error, decks){
      if (error) {
        console.log(error);
      } else {
        //console.log('helloooooo do we have a user object?' + req);
        var currentDecks = [];
        for (var deck in decks) {
          if (decks[deck].User == req.user.username) {
            //console.log(decks[deck]);
            currentDecks.push(decks[deck]);
            //console.log(currentDecks);
          }
        };
        res.render('pages/mydecks',
        {
          decks: currentDecks,
          currentUser: req.user.username,
          message: req.user.username+"'s Decks:"
        });
      };
    });
  });

router.post('/editdeck', function(req, res, next) {
  console.log(req.body);
  var currentDeck = req.body.name;
  modelCards.find(function(error, cards){
    if (error) console.log(error);
    var currentCards = [];
    for (var card in cards) {
      if (cards[card].DeckName == req.body.name) {
        currentCards.push(cards[card]);
      }
    }
    res.render('pages/editdeckview', {
      cards: currentCards,
      currentDeck: currentDeck
    });
  });
});

// router.get('/editdeck', function(req, res, next) {
//   console.log(req.params);
//   modelCards.find(function(error, cards){
//     if (error) console.log(error);
//     res.render('pages/editdeckview', {
//     cards: cards,
//     });
//   });
// });

router.get('/publicdecks', function(req, res, next) {
  model.find(function(error, decks){
      if (error) {
        console.log(error);
      } else {
        var currentDecks = [];
        for (var deck in decks) {
          if (decks[deck].Public == true) {
            currentDecks.push(decks[deck]);
          }
        };
        res.render('pages/publicdecks',
        {
          decks: currentDecks,
          currentUser: req.user,
          message: "Welcome to public decks."
        });
      };
    });
  });

//study mode code
router.post('/studydeck', function(req, res, next) {
    console.log(req.body);
  var currentDeck = req.body.name;
  modelCards.find(function(error, cards){
    if (error) console.log(error);
    var currentCards = [];
    for (var card in cards) {
      if (cards[card].DeckName == req.body.name) {
        currentCards.push(cards[card]);
      }
    }
    res.render('pages/studymode', {
      cards: currentCards,
      currentDeck: currentDeck
    });
  });
});

//delete a deck code
//pick up the name
//.where(deckname = deckname), delete by ID in api



module.exports = router;
