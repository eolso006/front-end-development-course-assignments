$(document).ready(function(){
  $(".error").hide();

var inputG = $('.input-group')
  inputG.filter(':even').addClass('even');

  $('input').on('blur', function(){
  	var input = $(this);
    var msg = input.closest('.input-group').find('.requiredMsg')
  	if(input.val() === ''){
      msg.fadeIn();

    }else{
      msg.fadeOut();
    }
})
    $('#emailAddress').on('blur', function(){
      var input = $(this);
      var inputValue = input.val();
      var emailMsg = input.closest('.input-group').find('.emailMsg');

      if (inputValue.indexOf('@') == -1 || inputValue.indexOf('.com') == -1 ) {
        emailMsg.fadeIn();
      }else {
        emailMsg.fadeOut();
      }
    })

});
