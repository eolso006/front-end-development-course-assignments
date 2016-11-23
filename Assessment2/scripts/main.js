function getElm(id) {
  return document.getElementById(id);
}
function getValue(id) {
  return getElm(id).value;
}

getElm("btnSubmit").addEventListener('click', submit);

/*
var reset = getElm("btnreset");
reset.addEventListener('click', reset);

function reset(){
  var inputIDArray = ["firstName", "lastName", "emailAddress", "findus", "need2blend", "terms"]
for(var i = 0; i < inputIDArray.length; i++){
  getElm(inputIDArray[i]).value = "";
  }
};*/
///////////////////////////////////////

function submit() {

var errorMsg = [];

function addErr(input) {
  input.classList.add('errClass');
}

function removeErr(input) {
  input.classList.remove('errClass');
}

  var fName = getElm("firstName")
    if (fName.value === '') {
      errorMsg.push('First Name is Required')
      addErr(fName);
//      fName.classList.add('errClass');
}
    else {
      removeErr(fName);
//      fName.classList.remove('errClass');
    }
  var lName = getElm("lastName")
  if (lName.value === '') {
    errorMsg.push('Last Name is Required')
    lName.classList.add('errClass');
//  lName.addErr;
}
    else {
      lName.classList.remove('errClass');
//      lName.removeErr;
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
  else {
  email.classList.remove('errClass');
  }
  var findUS = getElm("findus");
  if (findus.value === "") {
  errorMsg.push('Please tell us how you heard about us')
  findus.classList.add('errClass')
}
  else {
    findUS.classList.remove('errClass');
  }
  var need2blend = getElm("need2blend");
  if (need2blend.value === "") {
  errorMsg.push('We need to know why you need this!')
  need2blend.classList.add('errClass')
}
  else {
  need2blend.classList.remove('errClass');
  }
  var terms = getElm("terms");
  if (terms.checked == false) {
  errorMsg.push('Terms and Conditions Must Be Accepted')
  terms.classList.add('errClass')
}
  else {
  terms.classList.remove('errClass');
  }

console.log(errorMsg);
/*
if (errorMsg.length > 0) {
  var html = "";
  for (var i = 0; i < errorMsg.length; i++) {
    html += errorMsg[i] + "</br>";
  }
  getElm("message").innerHTML = html
}
else {
  alert('Submission Complete')
};

console.log(errorMsg[i]);
console.log(html);


*/


if (errorMsg.length > 0) {
  var html = "";
    for (var i = 0; i < errorMsg.length; i++) {
      html += "<li>" + errorMsg[i] + "</li>";
}
getElm("errorlist").innerHTML = html
}
  else {
  alert('Submission Complete')
}



}


/*  */
