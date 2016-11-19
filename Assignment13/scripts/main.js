function getElm(id) {
  return document.getElementById(id);
}
function getValue(id) {
  return getElm(id).value;
}
function Ipush() {
  return inputs.push("FIELD IS REQUIRED BEFORE SUBMISSION")
}
//var html = getElm(message).innerHTML = '<br>';
var invalid = "invalid"


function submit() {
  var errorMsg = [];

  var fName = getElm("firstName")
    if (fName.value === '') {
      errorMsg.push('First Name is Required')
      fName.classList.add('errClass');
  }
  var lName = getElm("lastName")
    if (lName.value === '') {
      errorMsg.push('Last Name is Required')
      lName.classList.add('errClass');
  }
  var email = getElm("emailAddress")
    if (email.value === '') {
      errorMsg.push('Email is Required')
      email.classList.add('errClass');
}
  else if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
      errorMsg.push('Valid Email is Required')
      email.classList.add('errClass');
}
  var pword = getElm("pword")
    if (pword.value === '') {
      errorMsg.push('Password is Required')
     pword.classList.add('errClass');
}
  var Cpword = getElm("confirmPword")
    if (Cpword.value === "" && Cpword.value !== pword.value) {
      errorMsg.push('Passwords Must Match')
      Cpword.classList.add('errClass');
}
  if (pword.value === '' && Cpword.value === '' && pword.value === Cpword.value) {
    errorMsg.push('Passwords Must Match')
    pword.classList.add('errClass')
    Cpword.classList.add('errClass');
}
  var tZone = getElm("timeZone");
  if (tZone.value === "empty") {
    errorMsg.push('Time Zone Not Selected')
    tZone.classList.add('errClass')
}
  var aboutMe = getElm("aboutMe");
  if (aboutMe.value === "") {
    errorMsg.push('Come On, Give us a LIL Something Please!')
    aboutMe.classList.add('errClass')
}
  var terms = getElm("terms");
  console.log(terms.checked);
  if (terms.checked == false) {
    errorMsg.push('Terms and Conditions Must Be Accepted')
    terms.classList.add('errClass')
}


if (errorMsg.length > 0) {
  var html = '';
  for (var i = 0; i < errorMsg.length; i++) {
    html += errorMsg[i] + '<br>';
  }
  getElm("message").innerHTML = html
}
else {
  alert('Submission Complete')
};

/*
  var pword = getValue("pword")
  if (pword == "") {
    errorMsg.push('Password is Required');
}
  var Cpword = getValue("confirmPword")
  if (Cpword == "" && Cpword !== pword) {
}
*/

console.log(errorMsg);





};

var submitbtn = document.getElementById("btnsubmit");
submitbtn.addEventListener('click', submit);

/*for (var i = 0; i < errorMsg.length; i++) {
  alert('Submission Complete')
};*/

var resetbtn = getElm("btnreset");
resetbtn.addEventListener('click', reset);

function reset(){
  var inputIDArray = ["firstName", "lastName", "emailAddress", "pword", "confirmPword", "timeZone", "aboutMe", "terms"]
for(var i = 0; i < inputIDArray.length; i++){
  getElm(inputIDArray[i]).value = "";
  }
};
