var Arr = [];
function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
//populate names
var fullName = firstName + " " + lastName;
getElm('p1_fullName').innerHTML = fullName
//validate names
var isValidName
//var notValidName = false;
if (firstName == "" || lastName == "") {
  isValidName = false;
}
 else {
   isValidName = true;
 }
 getElm("p1_valid").innerHTML = isValidName;
/*  getElm("p1_valid").innerHTML = notValidName
} else {
  getElm("p1_valid").innerHTML = isValidName
}*/
//name length
var fullNameLength = (firstName+lastName).length;
getElm("p1_fullNameLength").innerHTML = fullNameLength

/*
var firstNameInput = getElm('firstName');
if (isFnameValid === false) {
  firstNameInput.classlist.add('invalid');
} else {
  firstNameInput.classlist.remove('invalid');
}*/

    // Part 2  //populate email
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
getElm("p2_email").innerHTML = emailAddress;

//validate @
var isEmailValid = (emailAddress.indexOf('@') >= 0);
//var isEmailValid = (emailAddress.indexOf('@') > -1)
getElm("p2_valid").innerHTML = isEmailValid;

//length
getElm("p2_emailLength").innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
getElm("p3_number").innerHTML = (randomNumber);

var parsedNum = parseInt(randomNumber);
var isValidNum;
/*if (isNaN(parsedNum) {
  isValidNum = false;
}
else {
  isValidNum = true;
}*/
getElm("p3_valid").innerHTML = isValidNum;

    // Part 4
//    var arrayInput = getValue('arrayValue');
//messing with the var to populate the user data
var arrayInput = [fullName + emailAddress, + parsedNum];
    console.log(arrayInput);

Arr.push(arrayInput);
console.log(arrayInput);

getElm("p4_arraylength").innerHTML = Arr.length;

getElm("p4_valid").innerHTML = Arr;

    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
