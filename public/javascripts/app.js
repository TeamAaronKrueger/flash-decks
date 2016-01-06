var app = app || {};
var active = active || {};

var currentDeck;

//for mongo
Backbone.Model.idAttribute = "_id";

app.Model = Backbone.Model.extend({
  initialize: function(){
    console.log('a model was generated');
  }
});


//Old Collection
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

//Old COLLECTION VIEW
app.CollectionView = Backbone.View.extend({
  el: $('#cards'),
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
      console.log(this.template);

      new app.DeckModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});


//Old ModelView
app.DeckModelView = Backbone.View.extend({
  initialize: function() {
    console.log('ModelView instantiated');
    this.render();
  },
  render: function(template) {
    console.log('ModelView rendering.');
    var data = this.model.attributes;
      if (data.DeckName == currentDeck) {
      console.log('Grabbing template...');
      console.log('Transforming template...');
      var compileTpl = _.template(template);
      console.log('Creating HTML from template and model data...');
      var html = compileTpl(data);
      console.log('Rendering to page...');
      this.$el.append(html);
      }
    }
  });

//restart with Collection Here //
  var CollView = new Backbone.Collection({
    template: $('body').html(),
    el: $('lol'),
    model: model,
    initialize: function() {

    },
    render: function() {

    }
  })
/////


$(document).ready(function(){
  console.log('doc is ready');

  $('#ChemistryQuiz').on("click", function () {
    currentDeck = "ChemistryQuiz";
    console.log("the current deck is "+currentDeck);
    active.collection = new app.Collection();
  })


  $('#TarrentinoFanQuiz').on("click", function () {
    currentDeck = "Tarrentino Fan Quiz";

  $('#FrenchVerbs').on("click", function () {
    currentDeck = "FrenchVerbs";
    console.log("the current deck is "+currentDeck);
    active.collection = new app.Collection(
      {el:
      template: }
    );
  })



});
