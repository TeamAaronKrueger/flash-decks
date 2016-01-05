var app = app || {};
var active = active || {};

//for mongo
Backbone.Model.idAttribute = "_id";

app.Model = Backbone.Model.extend({
  initialize: function(){
    console.log('a model was generated');
  }
});


app.Collection = Backbone.Collection.extend({
  //get data from the api
  model: app.Model, //specify a model type
  url: '/cards',
  initialize: function(){
    var self = this;
    console.log('collection is on the loose');
    this.on('change', function(){
        console.log('our collection changed');
        var view = new app.CollectionView({
          collection: self
        });
        //we want a new view
    });
    this.on('sync', function(){
        console.log('our collection is synced');
        var view = new app.CollectionView({
          collection: self
        });
    });
    this.fetch();
  }
});



$(document).ready(function(){
  console.log('doc is ready');
  active.collection = new app.Collection();
  $('#ChemistryQuiz').on("click", function () {
    currentDeck = "ChemistryQuiz";
    console.log("the current deck is "+currentDeck);
  })
  $('#FrenchVerbs').on("click", function () {
    currentDeck = "FrenchVerbs";
    console.log("the current deck is "+currentDeck);
  })

});
