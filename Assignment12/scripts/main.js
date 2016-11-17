function submit() {

function getElm(id) {
  return document.getElementById(id);
}
function getValue(id) {
  return getElm(id).value;
}
function Ipush() {
  return inputs.push("FIELD IS REQUIRED BEFORE SUBMISSION")
}
var html = getElm(message).innerHTML = '<br>';
//var invalid =
///////////

var fName = getValue("firstName")


var lName = getValue("lastName")
var email = getValue("emailAddress")
var pword = getValue("pword")
var Cpword = getValue("confirmPword")

var inputs = []
if (fName == "") {
  //(Ipush + " " +
  console.log("Please Fill In First Name");
}
if (lName == "") {
  //(Ipush + " " +
  console.log("Please Fill In Last Name");
}
if (email == "" || email.indexOf('@') >= 0) {
  //(Ipush + " " +
  console.log("Please Fill In a Valid Email");
}
if (pword == "") {
  //(Ipush + " " +
  console.log("Please Create a Password");
}
if (Cpword == "" && Cpword !== pword) {
  //(Ipush + " " +
  console.log("Passwords Do Not Match");
}
console.log(inputs);


};
///////////
var submit2 = document.getElementById("btnsubmit");
submit2.addEventListener('click', submit);

var submit2
for (var i = 0; i < inputs.length; i++) {
  alert('Submission Complete')
}
/*
var reset = function() {
  alert('u reset doc')
};
getElm("btnsubmit").addEventListener('click', submit);
getElm("btnreset").addEventListener('click', reset);
*/


//also throw reset function inside of input field validation to make it reset when checking for validation //
// or something //
/*  */
