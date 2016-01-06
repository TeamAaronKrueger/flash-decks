var app = app || {};
var active = active || {};


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

app.QuestionCollectionView = Backbone.View.extend({
  el: $('#questions'),
  initialize: function() {
    console.log('CollectionView is a go.');
    // when loaded, let us render immediately
    this.$el.html('');
    this.render();
  },
  render: function() {
    console.log('CollectionView is rendering.');
    this.$el.html('');
    // we expect our CollectionView to be bound to a Collection
    var models = this.collection.models;
    for (var m in models) {
      new app.QuestionModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});


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



app.QuestionModelView = Backbone.View.extend({
  initialize: function() {
    console.log('ModelView instantiated');
    this.render();
  },
  render: function(template) {
    console.log('ModelView rendering.');
    var data = this.model.attributes;
    if (data.DeckName == currentDeck) {
    console.log('Transforming template...');
    var compileTpl = _.template(template);
    console.log('Creating HTML from template and model data...');
    var html = compileTpl(data);
    console.log('Rendering to page...');
    this.$el.append(html);
  }
}});
