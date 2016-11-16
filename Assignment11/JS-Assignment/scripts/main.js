function update() {
    //////////////////////Your Code Starts here
var firstName = getValue("firstName");
var lastName = getValue("lastName");
console.log(firstName);
console.log(lastName);
var emailAddress = getValue("emailAddress");
console.log(emailAddress);
/////////////part 1////////////////
var messages = [];
if (firstName == '') {
  messages.push("FIRST NAME IS REQUIRED");
}
if (lastName == '') {
  messages.push("LAST NAME IS REQUIRED");
}
if (emailAddress == '') {
  messages.push("EMAIL ADDRESS IS REQUIRED!");
}
console.log(messages);
////part 2
var html = '<br>'
for (var i = 0; i < messages.length; i++) {
  html =  html + messages[i] + '<br/>'
}
getElm("error-list").innerHTML = html

///////Part 3//////
var user = {
  first: firstName,
  last: lastName,
  email: emailAddress,
};

user.fullname = function(){
  return this.first + " " + this.last;
};

if(messages.length === 0){
  alert("Submitted")
}

};
///
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
  return getElm(id).value;
}

function getElm(id) {
  return document.getElementById(id);
}
