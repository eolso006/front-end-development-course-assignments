$(document).ready(function () {
  $('.error').hide();

  $('#btnSubmit').on('click', function () {
          validateAllInputs();
      });

/*
      $('#btnReset').on('click', function () {
          var allInputs = $('input, textarea')
          allInputs.val('');
          allInputs.removeClass('invalid');
          $('.error').hide();
          $('#messages').html('');
      });
*/


});

$('input, textarea').on('blur', function(){
var input = $(this);
var msg = input.closest('.input-group').find('.requiredMsg')
if(input.val() === ''){
  input.addClass('invalid');
  msg.fadeIn();

}else{
  msg.fadeOut();
  input.removeClass('invalid')
  input.addClass('valid');
}
});


/*   $('input, textarea').on('blur', function(){
var input = $(this);
var msg = input.closest('.input-group').find('.requiredMsg')
if(input.val() === ''){
  input.addClass('invalid');
  msg.fadeIn();

}else{
  msg.fadeOut();
  input.removeClass('invalid')
  input.addClass('valid');
}
});

var msgSpan = input.closest('.input-group').find('.requiredMsg');
    if (val === '') {
        msgSpan.fadeIn();
        input.addClass('invalid');
    } else {
        msgSpan.fadeOut();
        input.removeClass('invalid');
    }
*/

/* */
