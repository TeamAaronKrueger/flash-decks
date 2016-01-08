function verifyRegistration(){
  $('#registerButton').click(function(){
    var data = $('#registerForm').serialize();
    console.log(data);
  })
}
