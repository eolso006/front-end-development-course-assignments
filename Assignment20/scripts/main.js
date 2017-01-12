$(document).ready(function () {
  $('.error').hide();

  $('#btnSubmit').on('click', function () {
          validateAllInputs()
      });

console.log(validateAllInputs);

      $('#btnReset').on('click', function () {
          var allInputs = $('input, textarea')
          allInputs.val('');
          allInputs.removeClass('invalid');
          $('.error').hide();
      });


});



$('input, textarea').on('blur', function(){
var input = $(this);
validateInput(input);
/* var msg = input.closest('.input-group').find('.requiredMsg')
if(input.val() === ''){
  input.addClass('invalid');
  msg.fadeIn();

}else{
  msg.fadeOut();
  input.removeClass('invalid')
  input.addClass('valid');
} */
});


function validateInput(input) {
  var msg = input.closest('.input-group').find('.requiredMsg')
  if(input.val() === ''){
    input.addClass('invalid');
    msg.fadeIn();
    return false;
  }else{
    msg.fadeOut();
    input.removeClass('invalid')
    input.addClass('valid');
    return true;
  }
}


function validateAllInputs() {
    //Select all inputs and text areas
    var allInputs = $('input, textarea');
    console.log(allInputs);

    //Loop through each and validate individually
    for (var i = 0; i < allInputs.length; i++) {
        var currentInput = allInputs.eq(i);
        console.log(i);
      }
}

var answerArray = ["URname", "URanswer"];
var name = $("#name").val
var answer = $("#answer").val
console.log(answer);
function posted() {
  if (validateInput = true) {

  }
}


var html = '';


/*
'<div class="answerBox"><p>$("#answer").val</p><ul><li><img src="img/user.png" alt="user icon" style="width:64px;height:64px;"></li><li>$("#name").val</li></ul></div>'

var inputs = ['firstName', 'lastName'];
var html = '';
    if (errorList.length > 0) {
        //Loop through and add each message to our html variable
        html = '<ul class="errors">';
        for (var i = 0; i < errorList.length; i++) {
            //html += errorMsg[i] + '<br />';
            html = html + '<li>' +  errorList[i] + '</li>';
        }
        html += "</ul>";
    } else {
        html = '<h1>Thank you for registering</h1>';
        reset();
    }

    getE('messages').innerHTML = html;
 */

/* */
