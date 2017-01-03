$(document).ready(function () {
  $('.error').hide();





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
})
/*   var val = input.val();

    //Find the required input span.
    var msgSpan = input.closest('.input-group').find('.requiredMsg');
    if (val === '') {
        msgSpan.fadeIn();
        input.addClass('invalid');
    } else {
        msgSpan.fadeOut();
        input.removeClass('invalid');
    } */
/* */
