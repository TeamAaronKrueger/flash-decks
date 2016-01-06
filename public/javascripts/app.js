var app = app || {};
var active = active || {};

//for mongo
Backbone.Model.idAttribute = "_id";

// app.Model = Backbone.Model.extend({
//   initialize: function(){
//     console.log('a model was generated');
//   }
// });
//
//
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
          collection: self,
          el: $('#cards'),
          template: $('#card-template').html()
        });
        var view2 = new app.CollectionView({
          collection: self,
          el: $('#questions'),
          template: $('#question-template').html()
        });
        //we want a new view
    });
    this.on('sync', function(){
        console.log('our collection is synced');
        var view = new app.CollectionView({
          collection: self,
          el: $('#cards')
        });
        var view2 = new app.CollectionView({
          collection: self,
          el: $('#questions')

        });
    });
    this.fetch();
  }
});

// app.QuestionCollection = Backbone.Collection.extend({
//   //get data from the api
//   model: app.Model, //specify a model type
//   url: '/cards',
//   initialize: function(){
//     var self = this;
//     console.log('collection is on the loose');
//     this.on('change', function(){
//         console.log('our collection changed');
//         var view = new app.QuestionCollectionView({
//           collection: self
//         });
//         //we want a new view
//     });
//     this.on('sync', function(){
//         console.log('our collection is synced');
//         var view = new app.QuestionCollectionView({
//           collection: self
//         });
//     });
//     this.fetch();
//   }
// });


  var CollView = new Backbone.Collection({
    template: $('body').html(),
    el: $('lol'),
    model: model,
    initialize: function() {

    },
    render: function() {

    }
  })

$(document).ready(function(){
  console.log('doc is ready');

  $('#ChemistryQuiz').on("click", function () {
    currentDeck = "ChemistryQuiz";
    console.log("the current deck is "+currentDeck);
    active.collection = new app.Collection();
  })

  $('#TarrentinoFanQuiz').on("click", function () {
    currentDeck = "Tarrentino Fan Quiz";
    console.log("the current deck is "+currentDeck);
    active.collection = new app.Collection(
      // {el: }
    );
  })



});
