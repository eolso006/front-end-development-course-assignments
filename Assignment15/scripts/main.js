$(document).ready(function(){

     ///// Code goes here

//////   PART 1
  function greeting() {
    alert("Howdy")
  }
$('#btnOne').on('click', greeting)

//////   PART 2
$('#btnTwo').on('click', function () {
  $('.update-html').html('Hello Word!')
})

//////   PART 3
$('#btnThree').on('click', function () {
  $('#text-update').val("Hello World")
})

//////   PART 4
$('#btnCopyHtml').on('click', function () {
  var copiedHtml = $('.copy-html').html()
  $('.paste-html').html(copiedHtml)
})

//////   PART 6
$('#btnCopyValues').on('click', function () {
  var copiedValue = $('#copy-text').val()
  $('#paste-text').val(copiedValue)
})



});
