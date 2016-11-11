function update() {
    //////////////////////Your Code Starts here
var array = [];

    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
//populate names
var fullName = firstName + " " + lastName;
document.getElementById('p1_fullName').innerHTML = fullName
//validate names
var isValidName = true;
var notValidName = false;
if (firstName == "" || lastName == "") {
  getElm("p1_valid").innerHTML = notValidName
} else {
  getElm("p1_valid").innerHTML = isValidName
}
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

    // Part 2
//populate email
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
//var parseNumber = parsefloat('randomNumber');
//var makeNumber = Number(randomNumber)
//if (!isNaN(makeNumber)) { don't use this. instead use == or === (3 means is equal value and type)

getElm("p3_number").innerHTML = parsefloat(randomNumber);



    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);


array.push(arrayInput);
console.log();



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
