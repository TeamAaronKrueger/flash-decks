var app = app || {};
var active = active || {};

var currentDeck = "FrenchVerbs";

//for mongo
Backbone.Model.idAttribute = "_id";

app.Model = Backbone.Model.extend({
  initialize: function(){
    console.log('a model was generated');
  }
});


//COLLECTION
app.Collection = Backbone.Collection.extend({
  //get data from the api
  el: $('#cards'),
  template: $('#card-template').html(),
  model: app.Model, //specify a model type
  url: '/api/cards',
  initialize: function(){
    var self = this;
    console.log('collection is on the loose');
    this.on('change', function(){
        console.log('our collection changed');
        var deckView = new app.CollectionView({
          collection: self,
          el: $('#cards'),
          template: $('#card-template').html()
        });
         var questionView = new app.CollectionView({
          collection: self,
          el: $('#questions'),
          template: $('#question-template').html()
        });
        //we want a new view
    });
    this.on('sync', function(){
        console.log('our collection is synced');
        var deckView = new app.CollectionView({
          collection: self,
          el: $('#cards'),
          template: $('#card-template').html()
        });
    });
    this.fetch();
  }
});

//COLLECTION VIEW
app.CollectionView = Backbone.View.extend({
  el: $('#cards'),
  template: $('#card-template').html(),
  initialize: function() {
    console.log('CollectionView is a go.');
    // when loaded, let us render immediately
    this.$el.html('');
    console.log(this.template);
    this.render();
  },
  render: function() {
    console.log('CollectionView is rendering.');
    this.$el.html('');
    // we expect our CollectionView to be bound to a Collection
    var models = this.collection.models;
    for (var m in models) {
      new app.ModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});


//Old ModelView
app.ModelView = Backbone.View.extend({
  template: $('#card-template').html(),
  initialize: function() {
    console.log('ModelView instantiated');
    this.render();
  },
  render: function() {
    console.log('ModelView rendering.');
    var data = this.model.attributes;
      if (data.DeckName == currentDeck) {
      console.log('Grabbing template...');
      console.log('Transforming template...');
      var compileTpl = _.template(this.template);
      console.log('Creating HTML from template and model data...');
      var html = compileTpl(data);
      console.log('Rendering to page...');
      this.$el.append(html);
      }
    }
  });



$(document).ready(function(){
  console.log('doc is ready');

    function getDecks(){
      $.ajax({
        url: '/api/decks',
        type: 'GET',
        dataType: 'json'
      })
      .done(function(data) {
        console.log("success");
        console.log(data);
        renderDecks(data);
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

    };

    getDecks();
    function renderDecks(data){
      for (var deck in data) {
        $('body').append(data[deck].Name + data[deck].Description);
      };
    };

    function chooseADeck(){

    };

    currentDeck = "FrenchVerbs";
    console.log("the current deck is "+currentDeck);
    active.collection = new app.Collection(
      {
          el: $('#cards'),
          template: $('#card-template').html()
      });
     active.collection = new app.Collection(
      {
          el: $('#questions'),
          template: $('#question-template').html()
      });

});
