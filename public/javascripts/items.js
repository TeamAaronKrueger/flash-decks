


function editItem (id) {

    $("#"+id+"edit").hide('fast', function() {
      console.log("edit button is hidden")
    });

    $("#"+id+"atext").hide('fast', function() {
      console.log("text is hidden")
    });

    $("#"+id+"qtext").hide('fast', function() {
      console.log("quantity text is hidden")
    });

    var answerText = $("#"+id+"atext").text();

    $("#"+id+"ainput").attr('placeholder', answerText);
      //puts the current text in as placeholder in input box

    var questionText = $("#"+id+"qtext").text();

    $("#"+id+"qinput").attr('placeholder', questionText);

    $("#"+id+"qinput").show('fast', function() {
      //animation occured
    });

    $("#"+id+"ainput").show('fast', function() {
      //animation occured
    });

    $("#"+id+"save").show('fast', function() {
      //animation occured
    });

  };


  function saveItem (id) {

    console.log($("#"+id+"ainput").attr('placeholder'));
    console.log($("#"+id+"qinput").attr('placeholder'));
        var newAnswer;
          if ($("#"+id+"ainput").val()) {
            newAnswer = $("#"+id+"ainput").val();
          } else {
            newAnswer = $("#"+id+"ainput").attr('placeholder');
          };
          var newQuestion;
            if ($("#"+id+"qinput").val() == null) {
              newQuestion = $("#"+id+"qinput").val();
            } else {
              newQuestion = $("#"+id+"qinput").attr('placeholder');
            };

        console.log($("#"+id+"ainput").val());




        $("#"+id+"atext").text(newAnswer);
        $("#"+id+"qtext").text(newQuestion);
        //variables for new quantity and new text

        $("#"+id+"ainput").hide('fast', function() {
          //text input box hidden
        });

        $("#"+id+"qinput").hide('fast', function() {
          //quantity input box hidden
        });

        $("#"+id+"atext").show('fast', function() {
          //shows item text
        });

        $("#"+id+"qtext").show('fast', function() {
          //shows item quantity again
        });

        $("#"+id+"save").hide('fast', function() {
          //hides save button
        });

        $("#"+id+"edit").show('fast', function() {
          //animation occured
        });
      };
