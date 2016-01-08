var express = require('express');
var router = express.Router();
var model = require('../models/Deck');
var modelCards = require('../models/Card');


/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(function(error, decks){
      res.render('pages/welcome', {
        cards: decks
      });
    })
});

router.get('/mydecks', function(req, res, next) {
if (req.user) {
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
    } else {
      res.redirect('/');
    }; //end if
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
      currentDeck: currentDeck,
      currentUser: req.user.username
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
        if (req.user) {
          res.render('pages/publicdecks',
          {
            decks: currentDecks,
            message: "Welcome to public decks.",
            currentUser: req.user.username
          });
        } else {
          res.render('pages/publicdecks',
          {
            decks: currentDecks,
            message: "Welcome to public decks."
          });
        }
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
      currentUser: req.user.username
    });
  });
});




module.exports = router;
