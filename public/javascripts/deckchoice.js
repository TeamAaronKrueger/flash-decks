 (document).ready(function() {


console.log('loaded deckcchoice js');

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

 });
