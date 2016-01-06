var app = app || {};
var active = active || {};

$(document).ready(function(){
  console.log('doc is ready');

    function getDecks(){
      $.ajax({
        url: '/decks',
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
        $('body').append(data[deck].Name);
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
