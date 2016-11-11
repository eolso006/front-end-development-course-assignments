function getElm(id) {
  return document.getElementById(id);
}
var inputs = []
//var invalid =
///////////








///////////
var submit = function() {
  alert('Submission Complete')
};
var reset = function() {
  alert('u reset doc')
};
getElm("btnsubmit").addEventListener('click', submit);
getElm("btnreset").addEventListener('click', reset);

//also throw reset function inside of input field validation to make it reset when checking for validation //
// or something //
