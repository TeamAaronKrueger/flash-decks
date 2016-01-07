function addACard() {
 $("#addACard").click(function(){
   $.ajax({
     url: '/api/cards',
     type: 'post',
     data: $("#addCardForm").serialize(),
   })
   .done(function(response) {
     console.log("success/hello");
     console.log(response);
   })
   .fail(function() {
     console.log("error");
   })

 })
}

function deleteACard(){
  $('.deleteButton').click(function(){
    var id = this.value;

    $.ajax({
      url: '/api/cards/'+id,
      type: 'DELETE'
    })
    .done(function() {
      console.log("success");
      console.log(value);
    })
  })
}
/////who is proud of me for making all these lovely individual functions!!!!
function saveACard(){
    $('.saveCardButton').click(function(){
    var id = this.value;
    $.ajax({
      url: '/api/cards/'+id,
      type: 'PATCH',
      dataType: 'JSON',
      data: $("#"+id+"saveCardForm").serialize()
    })
    .done(function() {
      console.log("success");
      console.log(id);
    })
  })

}

$(document).ready(function() {

  //DECK View buttons
  $( "#editDeck" ).click(function() {
    $("#editDeck").toggle( "fast", function() {
    $( "#addCard" ).toggle( "fast", function() {
      $( "#deleteDeck" ).toggle( "fast", function() {
        // Animation complete.
        });
      });
    });
  });


  $( "#addCard").click(function() {
    $( "#addCardDiv").toggle( "fast", function(){
      //animation occured
    })
  });



  $( ".closeAdd").click(function() {
    $( "#addCardDiv").toggle( "fast" );
  });

  $( "#showDeckButtons" ).click(function() {
    $( "#deckButtons").toggle( "fast", function(){
         $( "#showDeckButtons" ).toggle( "fast");
    });

  });

  $( "#toggleAddDeck" ).click(function() {
    $( "#addDeckDiv").toggle( "fast", function(){
      });

  });

  addACard();
  deleteACard();
  saveACard();

  $( ".showAnswer" ).click(function() {
      var id= this.value;
      console.log(id);
        $("#"+id+"answer").show( "fast", function(){
          console.log("showing answer")
        });
        $("#"+id+"showAnswer").hide('fast', function() {
          console.log("")
        });
  });

  $( ".editCardButton" ).click(function() {
      var id= this.value;
      editItem(id);
  });



  $( ".saveCardButton" ).click(function() {
      var id= this.value;
      saveItem(id);
  });

});
